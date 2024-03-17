import React, { useState, useEffect } from "react"
import cardBackground from "../CryptoHoldem_assests/Cards new/Card Background.png"


import blueA from "../CryptoHoldem_assests/Cards new/Blue/Card Blue A.png"
import blueJ from "../CryptoHoldem_assests/Cards new/Blue/Card Blue J.svg"
import blueK from "../CryptoHoldem_assests/Cards new/Blue/Card Blue K.svg"
import blueQ from "../CryptoHoldem_assests/Cards new/Blue/Card Blue Q.svg"
import blue2 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 2.svg"
import blue3 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 3.svg"
import blue4 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 4.svg"
import blue5 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 5.svg"
import blue6 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 6.svg"
import blue7 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 7.svg"
import blue8 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 8.svg"
import blue9 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 9.svg"
import blue10 from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 10.svg"

import pinkA from "../CryptoHoldem_assests/Cards new/Pink/Card Pink A.svg"
import pinkJ from "../CryptoHoldem_assests/Cards new/Pink/Card Pink J.svg"
import pinkK from "../CryptoHoldem_assests/Cards new/Pink/Card Pink K.svg"
import pinkQ from "../CryptoHoldem_assests/Cards new/Pink/Card Pink Q.svg"
import pink2 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 2.svg"
import pink3 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 3.svg"
import pink4 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 4.svg"
import pink5 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 5.svg"
import pink6 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 6.svg"
import pink7 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 7.svg"
import pink8 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 8.svg"
import pink9 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 9.svg"
import pink10 from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 10.svg"

import greenA from "../CryptoHoldem_assests/Cards new/Green/Card Green A.svg"
import greenJ from "../CryptoHoldem_assests/Cards new/Green/Card Green J.svg"
import greenK from "../CryptoHoldem_assests/Cards new/Green/Card Green K.svg"
import greenQ from "../CryptoHoldem_assests/Cards new/Green/Card Green Q.svg"
import green2 from "../CryptoHoldem_assests/Cards new/Green/Card Green 2.svg"
import green3 from "../CryptoHoldem_assests/Cards new/Green/Card Green 3.svg"
import green4 from "../CryptoHoldem_assests/Cards new/Green/Card Green 4.svg"
import green5 from "../CryptoHoldem_assests/Cards new/Green/Card Green 5.svg"
import green6 from "../CryptoHoldem_assests/Cards new/Green/Card Green 6.svg"
import green7 from "../CryptoHoldem_assests/Cards new/Green/Card Green 7.svg"
import green8 from "../CryptoHoldem_assests/Cards new/Green/Card Green 8.svg"
import green9 from "../CryptoHoldem_assests/Cards new/Green/Card Green 9.svg"
import green10 from "../CryptoHoldem_assests/Cards new/Green/Card Green 10.svg"

import redA from "../CryptoHoldem_assests/Cards new/Red/Card Red A.svg"
import redJ from "../CryptoHoldem_assests/Cards new/Red/Card Red J.svg"
import redK from "../CryptoHoldem_assests/Cards new/Red/Card Red K.svg"
import redQ from "../CryptoHoldem_assests/Cards new/Red/Card Red Q.svg"
import red2 from "../CryptoHoldem_assests/Cards new/Red/Card Red 2.svg"
import red3 from "../CryptoHoldem_assests/Cards new/Red/Card Red 3.svg"
import red4 from "../CryptoHoldem_assests/Cards new/Red/Card Red 4.svg"
import red5 from "../CryptoHoldem_assests/Cards new/Red/Card Red 5.svg"
import red6 from "../CryptoHoldem_assests/Cards new/Red/Card Red 6.svg"
import red7 from "../CryptoHoldem_assests/Cards new/Red/Card Red 7.svg"
import red8 from "../CryptoHoldem_assests/Cards new/Red/Card Red 8.svg"
import red9 from "../CryptoHoldem_assests/Cards new/Red/Card Red 9.svg"
import red10 from "../CryptoHoldem_assests/Cards new/Red/Card Red 10.svg"

import { Button, Modal, notification } from "antd";
import playerOne from "../CryptoHoldem_assests/Player/head-cat.png"
import playerPlaceholder from "../CryptoHoldem_assests/Player/Placeholder Player/Placeholder Player 3.svg"
import mainPlayer from "../CryptoHoldem_assests/Player/head-whale-alive.png"
import roundTable from "../CryptoHoldem_assests/Rest/Pixel Table.png"
import { Contract, Eip1193Provider, ethers } from 'ethers';

import { BrowserProvider } from "ethers";
import { use } from "chai";
import { TupleType } from "typescript"

const Table: React.FC = () => {
  const [ownBudget, setOwnBudget] = useState<string>("0.00");
  const [playerBudget, setPlayerBudget] = useState<string>("0.00");
  const [potBudget, setPotBudget] = useState<string>("0.00");

  const [inputField, setInputField] = useState<number | undefined>()

  const [playerCardLeft, setPlayerCardLeft] = useState(cardBackground)
  const [playerCardRight, setPlayerCardRight] = useState(cardBackground)
  const [ownCardLeft, setOwnCardLeft] = useState(cardBackground)
  const [ownCardRight, setOwnCardRight] = useState(cardBackground)
  const [tableCardOne, setTableCardOne] = useState(cardBackground)
  const [tableCardTwo, setTableCardTwo] = useState(cardBackground)
  const [tableCardThree, setTableCardThree] = useState(cardBackground)
  const [tableCardFour, setTableCardFour] = useState(cardBackground)
  const [tableCardFive, setTableCardFive] = useState(cardBackground)

  const [api] = notification.useNotification();

  function getCardFromBit(card: number) {
    switch (card) {
      case 0b000000: return blue2;
      case 0b000001: return blue3;
      case 0b000010: return blue4;
      case 0b000011: return blue5;
      case 0b000100: return blue6;
      case 0b000101: return blue7;
      case 0b000110: return blue8;
      case 0b000111: return blue9;
      case 0b001000: return blue10;
      case 0b001001: return blueJ;
      case 0b001010: return blueQ;
      case 0b001011: return blueK;
      case 0b001100: return blueA;
      case 0b010000: return red2;
      case 0b010001: return red3;
      case 0b010010: return red4;
      case 0b010011: return red5;
      case 0b010100: return red6;
      case 0b010101: return red7;
      case 0b010110: return red8;
      case 0b010111: return red9;
      case 0b011000: return red10;
      case 0b011001: return redJ;
      case 0b011010: return redQ;
      case 0b011011: return redK;
      case 0b011100: return redA;
      case 0b100000: return pink2;
      case 0b100001: return pink3;
      case 0b100010: return pink4;
      case 0b100011: return pink5;
      case 0b100100: return pink6;
      case 0b100101: return pink7;
      case 0b100110: return pink8;
      case 0b100111: return pink9;
      case 0b101000: return pink10;
      case 0b101001: return pinkJ;
      case 0b101010: return pinkQ;
      case 0b101011: return pinkK;
      case 0b101100: return pinkA;
      case 0b110000: return green2;
      case 0b110001: return green3;
      case 0b110010: return green4;
      case 0b110011: return green5;
      case 0b110100: return green6;
      case 0b110101: return green7;
      case 0b110110: return green8;
      case 0b110111: return green9;
      case 0b111000: return green10;
      case 0b111001: return greenJ;
      case 0b111010: return greenQ;
      case 0b111011: return greenK;
      case 0b111100: return greenA;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getState();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function getCard(cardsOnTable: Uint8Array, cardsRevealed: boolean[], playerAdress: string, player_Addresses: string[]) {
    for (let i = 0; i < cardsRevealed.length; i++) {
      let player_index = 0
      for (i = 0; i < player_Addresses.length; i++)
        if (player_Addresses[i] == playerAdress) {
          player_index = i
        }
      if (cardsRevealed[i]) {
        if (i == 0 && i == player_index) {
          setOwnCardLeft(getCardFromBit(cardsOnTable[0])!)
          setOwnCardRight(getCardFromBit(cardsOnTable[1])!)
          setPlayerCardLeft(getCardFromBit(cardsOnTable[2])!)
          setPlayerCardRight(getCardFromBit(cardsOnTable[3])!)
        } else if (i == 1 && i == player_index) {
          setOwnCardLeft(getCardFromBit(cardsOnTable[1])!)
          setOwnCardRight(getCardFromBit(cardsOnTable[2])!)
          setPlayerCardLeft(getCardFromBit(cardsOnTable[3])!)
          setPlayerCardRight(getCardFromBit(cardsOnTable[0])!)
        } else if (i == 2 && i == player_index) {
          setOwnCardLeft(getCardFromBit(cardsOnTable[2])!)
          setOwnCardRight(getCardFromBit(cardsOnTable[3])!)
          setPlayerCardLeft(getCardFromBit(cardsOnTable[0])!)
          setPlayerCardRight(getCardFromBit(cardsOnTable[1])!)
        } else if (i == 3 && i == player_index) {
          setOwnCardLeft(getCardFromBit(cardsOnTable[3])!)
          setOwnCardRight(getCardFromBit(cardsOnTable[0])!)
          setPlayerCardLeft(getCardFromBit(cardsOnTable[1])!)
          setPlayerCardRight(getCardFromBit(cardsOnTable[2])!)
        } else if (i == 4) {
          setTableCardOne(getCardFromBit(cardsOnTable[i])!)
        } else if (i == 5) {
          setTableCardTwo(getCardFromBit(cardsOnTable[i])!)
        } else if (i == 6) {
          setTableCardThree(getCardFromBit(cardsOnTable[i])!)
        } else if (i == 7) {
          setTableCardFour(getCardFromBit(cardsOnTable[i])!)
        } else if (i == 8) {
          setTableCardFive(getCardFromBit(cardsOnTable[i])!)
        }
      }
    }

  }

  const abi = ["function bet(uint256 amount) public",
    "function fold() public",
    "function gameState() external view returns (tuple(uint256 playerCount, uint256 playerStack, uint8 round, address playerAddress, uint256 playerBet, uint256 cardCount, uint8[] memory cardsOnTable, bool[] memory cardsRevealed, address[] memory playerAddresses))"];

  var provider = new BrowserProvider(window.ethereum as Eip1193Provider);

  function getProvider() {
    if (provider === null) {
      // @ts-ignore
      provider = new BrowserProvider(window.ethereum);
    }
    return provider;
  }

  const bet = async (amount: number) => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0xd386fD42c8C65A345646F4E0683DfF9EcA0c2716", abi, signer);
      const tx = await contract.bet(amount);
      await tx.wait();
      console.log(await tx);
    } catch (err) {
      console.warn("failed to bet..", err);
      //openNotification();
    }
  }

  const getState = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0xd386fD42c8C65A345646F4E0683DfF9EcA0c2716", abi, signer);
      const tx = await contract.gameState();
      // await tx.wait();
      console.log(tx);
    } catch (err) {
      console.warn("failed to get state...", err);
      //openNotification();
    }
  }

  const fold = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0xd386fD42c8C65A345646F4E0683DfF9EcA0c2716", abi, signer);
      const tx = await contract.fold();
      await tx.wait();
      console.log(tx);
    } catch (err) {
      console.warn("failed to fold..", err);
      //openNotification();
    }
  }

  return (
    <div className={"flex justify-center bg-primary h-[94vH]"}>
      <div>
        <img src={roundTable} alt="Table" className="w-full roundTable " />
        <p className={"text-white bg-[#500004] rounded absolute top-[35%] left-[43%] text-4xl pr-2 pl-2 pt-1 pb-1 "}>Total Pot: {potBudget}$</p>

        <p className={"bg-cgrey text-primary rounded absolute top-[31%] left-[15.5%] text-2xl p-1"}>{playerBudget}$</p>
        <p className={"bg-cgrey text-primary rounded absolute top-[87%] right-[23%] text-2xl p-1"}>{ownBudget}$</p>
        <div className={"flex flex-col absolute right-[32%] top-[65%] w-[8%] gap-3"}>
          <button
            className={"text-primary bg-cgrey hover:bg-white rounded text-2xl pr-3 pl-3"} onClick={fold}>
            Fold
          </button>
          <button
            className={"text-primary bg-cgrey hover:bg-white rounded text-2xl pr-3 pl-3"} onClick={() => bet(0)}>
            Check
          </button>
          <button
            className={"text-primary bg-cgrey hover:bg-white rounded text-2xl pr-3 pl-3"} onClick={async () => await bet(inputField!)}>
            Raise
          </button>
          <input
            className={"text-primary bg-cgrey rounded text-2xl pr-3 pl-3 text-center"} onChange={(event) => setInputField(event.target.value? 0 : 1)} />

        </div>

        <img src={playerOne} alt="player 1" className="playerOne" />
        <img src={playerPlaceholder} alt="player 2" className="playerTwo" />
        <img src={playerPlaceholder} alt="player 3" className="playerThree" />
        <img src={playerPlaceholder} alt="player 4" className="playerFour" />

        <img src={mainPlayer} alt="mainPlayer" className="mainPlayer" />

        <img src={tableCardOne} alt="middleCard 1" className="tableCardOne" />
        <img src={tableCardTwo} alt="middleCard 2" className="tableCardTwo" />
        <img src={tableCardThree} alt="middleCard 3" className="tableCardThree" />
        <img src={tableCardFour} alt="middleCard 4" className="tableCardFour" />
        <img src={tableCardFive} alt="middleCard 5" className="tableCardFive" />

        <img src={ownCardLeft} alt="ownCard 1" className="ownCardLeft " />
        <img src={ownCardRight} alt="ownCard 2" className="ownCardRight" />
        <img src={playerCardLeft} alt="ownCard 1" className="playerCardLeft" />
        <img src={playerCardRight} alt="ownCard 2" className="playerCardRight" />
      </div>
    </div>
  )
}

export default Table
