
import React,{ useState } from "react";

const Counter = () => {
    const[clicks,setclicks]= useState(0);
    function handleButtonClick(){
        setclicks(clicks+10);
    }
    
    return(
        <>
            <span>You clicked {clicks} clicks</span>
            <br/>
            <button onClick={handleButtonClick} color="red">Click Me!</button>
        </>
    );

};
export default Counter;