import React from "react";
import logo from "../images/logo.svg"
import triangle from "../images/bg-triangle.svg"
import Button from "./Button";

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
            <div className="main">
                <img alt="" src={triangle} className="game-triangle" />
                <Button avatar="paper" /> 
                <Button avatar="scissors" />
                <Button avatar="rock" />  
            </div>
            <footer>
                <button type="button" className="rules" onClick={displayRules}>RULES</button>
            </footer>
        </div>
    )
}

export default GamePlay