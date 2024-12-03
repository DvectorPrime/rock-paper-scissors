import React from "react";
import logo from "../images/logo.svg"

function Main(){
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="score-container">
                <p className="score-label">SCORE</p>
                <p className="score">12</p>
            </div>
        </header>
    )
}

export default Main