import React from "react"
import Button from "./Button"

function PhaseTwo(){

    return (
        <div className="choice-dashboard">
            <div className="choices">
                <Button avatar = "rock" />
                <p>YOU PICKED</p>
            </div>
            <div className="choices">
                <Button avatar = "rock" />
                {/* <div className="empty-choice"></div> */}
                <p>THE HOUSE PICKED</p>
            </div>
        </div>
    )
}

export default PhaseTwo