// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

import { inEuint8, euint8, inEuint16, euint16, FHE } from "@fhenixprotocol/contracts/FHE.sol";
import "@fhenixprotocol/contracts/access/Permissioned.sol";



contract Poker is Permissioned {
    
    address[] public players;
    euint8[] public cards;
    
    constructor() {
        
    }

    function isPlayer(address player) public view returns (bool) {
        for (uint8 i = 0; i < players.length; i++) {
            if (players[i] == player) {
                return true;
            }
        }
        return false;
    }

    function playerIndex(address player) public view returns (uint8) {
        for (uint8 i = 0; i < players.length; i++) {
            if (players[i] == player) {
                return i;
            }
        }
        return 0xff;
    }
    
    function joinGame() public payable{
        require(players.length < 5, "Game is full");
        require(!isPlayer(msg.sender), "You are already in the game");
        require(msg.value == 1 ether, "You need to pay 1 ether to join the game");
        
        players.push(msg.sender);
    }

    function deal() public {
        require(players.length > 1, "Not enough players to start the game");
        
        // create a new deck of cards
        cards = new euint8[](players.length * 2 + 5);
        for (uint8 i = 0; i < cards.length; ) {
            euint8 color = RandomMock.getFakeRandomU8();
            euint8 value = RandomMock.getFakeRandomU8();
            euint8 card = FHE.or(FHE.and(color, FHE.asEuint8(0x30)), FHE.and(value, FHE.asEuint8(0xf)));

            // sanity check value below 13
            card = FHE.select(FHE.lt(FHE.and(card, FHE.asEuint8(0xf)), FHE.asEuint8(13)), card, FHE.asEuint8(0xff));
            // check if card exists, else "continue"
            for (uint8 j = 0; j < i; j++) {
                card = FHE.select(FHE.eq(cards[j], card), card, FHE.asEuint8(0xff));
            }

            cards[i] = card;
            euint8 e_i = FHE.select(FHE.ne(card, FHE.asEuint8(0xff)), FHE.asEuint8(i + 1), FHE.asEuint8(i));
            i = FHE.decrypt(e_i);

            if (i >= (players.length * 2 + 5))
                break;
        }
    }

    function revealOwnCards(Permission calldata perm) public view onlySender(perm) returns (bytes memory) {
        require(isPlayer(msg.sender), "You are not in the game");
        require(cards.length > 0, "No cards to reveal");

        uint8 index = playerIndex(msg.sender);
        require(index < players.length, "Player not found");
        require(index < (cards.length - 5) / 2, "Player not assigned cards");

        // böse! nicht decrypten
        // uint8 card1 = FHE.decrypt(cards[2*index]);
        // uint8 card2 = FHE.decrypt(cards[2*(index + 1)]);
        
        euint16 ret = FHE.or(FHE.asEuint16(cards[2*index]), FHE.shl(FHE.asEuint16(cards[2*(index + 1)]), FHE.asEuint16(8)));
        return FHE.sealoutput(ret, perm.publicKey);
        // check which cards are assigned
        // return permissioned player cards
    }


    function getSensitiveData(Permission calldata perm) public view onlySender(perm) returns (string memory) {
    // Logic to return sensitive data
    }
    
    // Add additional functions as necessary...
}

library RandomMock {
    function getFakeRandom() internal view returns (uint256) {
        uint blockNumber = block.number;
        uint256 blockHash = uint256(blockhash(blockNumber));

        return blockHash;
    }

    function getFakeRandomU8() public view returns (euint8) {
        uint8 blockHash = uint8(getFakeRandom());
        return FHE.asEuint8(blockHash);
    }
}