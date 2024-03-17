import React, {useState} from "react"
import cardBackground from "../CryptoHoldem_assests/Cards new/Card Background.svg"
import playerOne from "../CryptoHoldem_assests/Player/head-cat.png"
import playerPlaceholder from "../CryptoHoldem_assests/Player/Placeholder Player/Correct placeholder.png"
import roundTable from "../CryptoHoldem_assests/Rest/Pixel Table.png"
const Table: React.FC = () => {


  return (
    <div className={"flex justify-center bg-primary h-screen"}>
      <div>
        <img src={roundTable} alt="Table" className="w-full roundTable" />

        <img src={playerOne} alt="player 1" className="playerOne" />
        <img src={playerPlaceholder} alt="player 2" className="playerTwo" />
        <img src={playerPlaceholder} alt="player 3" className="playerThree" />
        <img src={playerPlaceholder} alt="player 4" className="playerFour" />


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
