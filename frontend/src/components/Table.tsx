import React, { useState, useEffect } from "react"
import cardBackground from "../CryptoHoldem_assests/Cards new/Card Background.png"


import blueA from "../CryptoHoldem_assests/Cards new/Blue/Card Blue A.png"
import blueJ from "../CryptoHoldem_assests/Cards new/Blue/Card Blue J.svg"
import blueK from "../CryptoHoldem_assests/Cards new/Blue/Card Blue Q.svg"
import blueQ from "../CryptoHoldem_assests/Cards new/Blue/Card Blue 1.svg"
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
import pinkK from "../CryptoHoldem_assests/Cards new/Pink/Card Pink Q.svg"
import pinkQ from "../CryptoHoldem_assests/Cards new/Pink/Card Pink 1.svg"
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
import greenK from "../CryptoHoldem_assests/Cards new/Green/Card Green Q.svg"
import greenQ from "../CryptoHoldem_assests/Cards new/Green/Card Green 1.svg"
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
import redK from "../CryptoHoldem_assests/Cards new/Red/Card Red Q.svg"
import redQ from "../CryptoHoldem_assests/Cards new/Red/Card Red 1.svg"
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

const Table: React.FC = () => {
  const [ownBudget, setOwnBudget] = useState<string>("0.00");
  const [playerBudget, setPlayerBudget] = useState<string>("0.00");
  const [potBudget, setPotBudget] = useState<string>("0.00");

  const [inputField, setInputField] = useState<number | undefined>()

  const [ownCardLeft, setOwnCardLeft] = useState()
  const [ownCardRight, setOwnCardRight] = useState()
  const [ownCardLeft, setOwnCardLeft] = useState()
  const [ownCardRight, setOwnCardRight] = useState()
  const [tableCardOne, setTableCardOne] = useState()
  const [tableCardTwo, setTableCardTwo] = useState()
  const [tableCardThree, setTableCardThree] = useState()
  const [tableCardFour, setTableCardFour] = useState()
  const [tableCardFive, setTableCardFive] = useState()

  const [api] = notification.useNotification();

  useEffect(() => {
    const interval = setInterval(() => {
      getState();
    }, 2000);

    return () => clearInterval(interval);
  }, []);



  function getCardFromBit(card: uint8){

  }

  function getCard(cardsOnTable: uint8[], cardsRevealed: bool[], playerAdress: address, player_Addresses: address[]){
    for (let i = 0; i < cardsRevealed.length; i++){
      let player_index = 0
      for (i = 0; i< player_Addresses.length; i++)
          if (player_Addresses[i] == playerAdress){
            player_index = i
          }
      if (cardsRevealed[i]) {
          if(i ==0 && i == player_index){
           setOwnCardLeft(getCardFromBit(cardsOnTable[i]))
           setOwnCardRight(getCardFromBit(cardsOnTable[i]))
           set(getCardFromBit(cardsOnTable[i]))
           setOwnCardLeft(getCardFromBit(cardsOnTable[i]))
          }else if (i == 4){
            setTableCardOne(getCardFromBit(cardsOnTable[i]))
          }else if (i == 5){
            setTableCardTwo(getCardFromBit(cardsOnTable[i]))
          }else if (i == 6){
            setTableCardThree(getCardFromBit(cardsOnTable[i]))
          }else if (i == 7){
            setTableCardFour(getCardFromBit(cardsOnTable[i]))
          }else if (i == 8){
            setTableCardFive(getCardFromBit(cardsOnTable[i]))
          }
      }
    }

  }

  const abi = ["function bet() public",
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

  const bet = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0xd386fD42c8C65A345646F4E0683DfF9EcA0c2716", abi, signer);
      const tx = await contract.bet();
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
            className={"text-primary bg-cgrey hover:bg-white rounded text-2xl pr-3 pl-3"} onClick={bet}>
            Check
          </button>
          <button
            className={"text-primary bg-cgrey hover:bg-white rounded text-2xl pr-3 pl-3"} onClick={bet}>
            Raise
          </button>
          <input
            className={"text-primary bg-cgrey rounded text-2xl pr-3 pl-3 text-center"} />

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
        <img src={playerCardLeft} alt="ownCard 1" className="ownCardLeft" />
        <img src={playerCardRight} alt="ownCard 2" className="ownCardRight" />
      </div>
    </div>
  )
}

export default Table
