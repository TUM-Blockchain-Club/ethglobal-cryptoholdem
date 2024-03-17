import React, {useState} from "react"
import cardBackground from "../CryptoHoldem_assests/Cards new/Card Background.png"

import playerOne from "../CryptoHoldem_assests/Player/head-cat.png"
import playerPlaceholder from "../CryptoHoldem_assests/Player/Placeholder Player/Placeholder Player 3.svg"
import mainPlayer from "../CryptoHoldem_assests/Player/head-whale-alive.png"

import roundTable from "../CryptoHoldem_assests/Rest/Pixel Table.png"
const Table: React.FC = () => {


  return (
    <div className={"flex justify-center bg-primary h-[94vH]"}>
      <div>
        <img src={roundTable} alt="Table" className="w-full roundTable " />

        {/*<p className={"text-white bg-cover bg-[url('/CryptoHoldem_assests/Rest/Total pot background.png')] rounded absolute top-[31%] absolute  "}>Total Pot: 200$</p>*/}

        <p className={"bg-white text-primary rounded absolute top-[31%] left-[15.5%] text-2xl"}>2000$</p>
        <p className={"bg-white text-primary rounded absolute top-[87%] right-[23%] text-2xl"}>2000$</p>


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
