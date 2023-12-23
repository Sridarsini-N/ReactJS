import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";

export function Taskeight(){
    const [counter,setCounter]=useState(0)
    function sub(){
        setCounter(counter-1)
    }
    function reset(){
        setCounter(counter*0)
    }
    
    const disable = counter == 0
    const addDisable = counter == 10
    return(
        <div className="text-center text-center pt-5">
        <h1>{counter}</h1>
        <button disabled={addDisable} onClick={()=>{setCounter(counter+1)}}>Add</button>
        <button onClick={sub} disabled={disable}>Sub</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}