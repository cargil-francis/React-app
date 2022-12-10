import React,{useEffect} from "react";
const Test = () => {
    useEffect(() =>{
    console.log("Hey");
    }, []);
     return <h1>Inspect</h1>;
};

export default Test;