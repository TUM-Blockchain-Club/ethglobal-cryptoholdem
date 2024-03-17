import React, {useState, useEffect} from "react"
import cardBackground from "../CryptoHoldem_assests/Cards new/Card Background.png"

import { Button, Modal, notification } from "antd";


import playerOne from "../CryptoHoldem_assests/Player/head-cat.png"
import playerPlaceholder from "../CryptoHoldem_assests/Player/Placeholder Player/Placeholder Player 3.svg"
import mainPlayer from "../CryptoHoldem_assests/Player/head-whale-alive.png"

import roundTable from "../CryptoHoldem_assests/Rest/Pixel Table.png"
import { Contract, Eip1193Provider, ethers } from 'ethers';

import { BrowserProvider } from "ethers";
import { use } from "chai";

const Table: React.FC = () => {
  const [api] = notification.useNotification();
  
  useEffect(() => {
    const interval = setInterval(() => {
      getState();
    }, 500);

    return () => clearInterval(interval);
  }, []);
  
  const abi = ["function bet() public", "function fold() public", "function getState() public view"];

  var provider =  new BrowserProvider(window.ethereum as Eip1193Provider);


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
      console.log(tx);
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
      const tx = await contract.getState();
      await tx.wait();
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
        <p className={"text-white bg-[#500004] rounded absolute top-[35%] left-[43%] text-4xl pr-2 pl-2 pt-1 pb-1 "}>Total Pot: 200$</p>

        <p className={"bg-cgrey text-primary rounded absolute top-[31%] left-[15.5%] text-2xl p-1"}>2000$</p>
        <p className={"bg-cgrey text-primary rounded absolute top-[87%] right-[23%] text-2xl p-1"}>2000$</p>
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

        <img src={cardBackground} alt="middleCard 1" className="tableCardOne" />
        <img src={cardBackground} alt="middleCard 2" className="tableCardTwo" />
        <img src={cardBackground} alt="middleCard 3" className="tableCardThree" />
        <img src={cardBackground} alt="middleCard 4" className="tableCardFour" />
        <img src={cardBackground} alt="middleCard 5" className="tableCardFive" />

        <img src={cardBackground} alt="ownCard 1" className="ownCardLeft " />
        <img src={cardBackground} alt="ownCard 2" className="ownCardRight" />
      </div>
    </div>
  )
}

export default Table
