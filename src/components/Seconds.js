import React, {useState,useEffect}from "react";

const Seconds = () =>{
    const [counter,setCounter] =useState(1);
    useEffect(() =>{
        const timer = setInterval(() =>{
            setCounter(counter =>counter+1);
        },5000);
        return () =>{
            clearInterval(timer);

        };

    },[]);
    useEffect(()=>{
        console.log("Everytime");
    return () =>{
        console.log(" called before unmounting");

    }
        
    },[]);

   return <span>you have spent {counter}Seconds</span> 
};
export default Seconds;