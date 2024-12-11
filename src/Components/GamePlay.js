import React from "react";
import logo from "../images/logo.svg"
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";

function GamePlay( {setShowRules} ){
    
    function displayRules(){
        setShowRules(true)
    }

    return (
        <div className="game-container">
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="score-container">
                    <p className="score-label">SCORE</p>
                    <p className="score">12</p>
                </div>
            </header>
            <main>
                {/* <PhaseOne /> */}
                <PhaseTwo />
            </main>
            <footer>
                <button type="button" className="rules" onClick={displayRules}>RULES</button>
            </footer>
        </div>
    )
}

export default GamePlay