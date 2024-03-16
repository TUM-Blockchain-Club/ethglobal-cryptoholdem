// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {inEuint8, euint8, inEuint16, euint16, FHE} from "@fhenixprotocol/contracts/FHE.sol";
import "@fhenixprotocol/contracts/access/Permissioned.sol";

contract Poker is Permissioned {
  // players
  address[] public players;
  // current stack
  mapping(address => uint8) public currentStack; 
  // encrypted cards
  euint8[] public cards;
  // open cards 
  uint8[] public tableCards;
  // players still in the game
  mapping(address => bool) public stillPlaying;
  // player whose turn it is
  address public currentPlayer;
  // current bet
  uint8 public currentBet;
  // pot
  uint8 public pot;

  constructor() {
    nextPlayer = 0;
    pot = 0;
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

  function joinGame() public payable {
    require(players.length < 5, "Game is full");
    require(!isPlayer(msg.sender), "You are already in the game");
    require(msg.value == 1 ether, "You need to pay 1 ether to join the game");

    players.push(msg.sender);
    currentStack[msg.sender] = msg.value;
    stillPlaying[msg.sender] = true;
  }

  function bet (uint8 amount) public payable {
    require(isPlayer(msg.sender), "You are not in the game");
    require(amount > 0, "You need to raise more than 0 ether");
    require(msg.value == amount, "You need to pay the amount you want to raise");

    pot += msg.value;
  }

  /*function betRound() public return uint8 {
    uint8 currentBet = 0;

    for (uint8 i = 0; i < players.length; i++) {
      // check if player is still in the game
      if (!stillPlaying[i]) continue ;

      // check if player has already bet
      // check if player has enough money to bet
      // check if player wants to bet
      // update player bet
      // update currentBet
    }


    uint currentBet

    pot += msg.value;
  }*/
  
  /*function mainLoop() public payable { // returns (gamestate?)
    // main game loop
    // check if all players have joined
    require(isPlayer(msg.sender), "You are not in the game");
    require(players.length > 1, "Not enough players to start the game");
    require(cards.length == 0, "Game already started");

    // track next player to move

    // track current game phase and allowed actions

    // deal cards
    deal()


    // pre-flop bet round                
    // reveal flop
    // bet round
    // reveal turn
    // bet round
    // reveal river
    // bet round
    // check for winner
    // showdon 
    // distribute pot                

  }*/

  function deal() public {
    require(players.length > 1, "Not enough players to start the game");

    // create a new deck of cards
    cards = new euint8[](players.length * 2 + 5);
    for (uint8 i = 0; i < cards.length; ) {
      euint8 color = RandomMock.getFakeRandomU8();
      euint8 value = RandomMock.getFakeRandomU8();
      euint8 card = FHE.or(
        FHE.and(color, FHE.asEuint8(0x30)),
        FHE.and(value, FHE.asEuint8(0xf))
      );

      // sanity check value below 13
      card = FHE.select(
        FHE.lt(FHE.and(card, FHE.asEuint8(0xf)), FHE.asEuint8(13)),
        card,
        FHE.asEuint8(0xff)
      );
      // check if card exists, else "continue"
      for (uint8 j = 0; j < i; j++) {
        card = FHE.select(FHE.eq(cards[j], card), card, FHE.asEuint8(0xff));
      }

      cards[i] = card;
      euint8 e_i = FHE.select(
        FHE.ne(card, FHE.asEuint8(0xff)),
        FHE.asEuint8(i + 1),
        FHE.asEuint8(i)
      );
      i = FHE.decrypt(e_i);

      if (i >= (players.length * 2 + 5)) break;
    }
  }

  function revealOwnCards(
    Permission calldata perm
  ) public view onlySender(perm) returns (bytes memory) {
    require(isPlayer(msg.sender), "You are not in the game");
    require(cards.length > 0, "No cards to reveal");

    uint8 index = playerIndex(msg.sender);
    require(index < players.length, "Player not found");
    require(index < (cards.length - 5) / 2, "Player not assigned cards");

    euint16 ret = FHE.or(
      FHE.asEuint16(cards[2 * index]),
      FHE.shl(FHE.asEuint16(cards[2 * (index + 1)]), FHE.asEuint16(8))
    );
    return FHE.sealoutput(ret, perm.publicKey);
    // check which cards are assigned
    // return permissioned player cards
  }

  function revealOnTable(uint8 start, uint8 end) public {
    require(cards.length > 0, "No cards to reveal");
    require(start < end, "Invalid range");
    require(end <= tableCards.length, "Invalid range");

    uint8 tableCardIndex = players.length * 2;
    for (uint8 i = start; i < end; i++) {
      uint8 tmp = FHE.decrypt(cards[tableCardIndex + i]);
      tableCards[tableCardIndex + i] = tmp;
    }
  }

  // this function implements our poker ruleset
  // call after all cards are revealed
  // possible hands:
  // - high card
  // - pair
  // - two pair
  // - three of a kind
  // - flush
  // - four of a kind
  function determineWinner() public returns (address) {
    require(cards.length > 0, "No cards have been distributed");
    require(tableCards.length > 0, "No table cards to reveal");

    // check hands of all players and track highest hand(s)
    // if multiple players have the same hand, check the highest card
    // if multiple players have the same hand and highest card, split the pot
    // if no players have a hand, split the pot
    for (uint8 i = 0; i < players.length; i++) {
      // first, decrypt hands of players still in the game
      // use the mapping here
      
    }


    // determine winner
    return players[0];
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
