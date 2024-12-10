import React from "react";
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"

function Button(props){
    const avatar = props.avatar === "paper" ? paper : props.avatar === "rock" ? rock : scissors
    
    return (
        <button type="button" className={`outer-circle ${props.avatar}`}>
            <div className="inner-circle">
                 <img alt="" src={avatar} className="avatar" />
            </div>
        </button>
    )
}

export default Button