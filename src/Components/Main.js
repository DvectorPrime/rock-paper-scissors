import React, { useState } from "react";
import Rules from "./Rules";
import GamePlay from "./GamePlay";

function Main(){
    const [showRules, setShowRules] = useState(false)

    return(
        <>
       { 
            showRules === true &&
            <Rules
                showRules = {showRules}
                setShowRules = {setShowRules}
            />
       }
        <GamePlay 
            setShowRules= {setShowRules} 
        />
        </>
    )
}

export default Main