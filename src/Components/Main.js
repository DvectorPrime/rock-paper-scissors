import React from "react";
import logo from "../images/logo.svg"
import triangle from "../images/bg-triangle.svg"
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"

function Main(){
    return(
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
                <img alt="" src={triangle} className="game-triangle" />
                <button type="button" className="outer-circle paper">
                    <div className="inner-circle">
                        <img alt="" src={paper} />
                    </div>
                </button>
                <button type="button" className="outer-circle scissors">
                    <div className="inner-circle">
                    <img alt="" src={scissors} />
                    </div>
                </button>
                <button type="button" className="outer-circle rock">
                    <div className="inner-circle">
                        <img alt="" src={rock} />
                    </div>
                </button>
            </main>
            <footer>
                <button type="button" className="rules">RULES</button>
            </footer>
        </div>
    )
}

export default Main