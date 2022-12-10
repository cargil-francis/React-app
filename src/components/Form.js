import React from "react";
import App from "../App";

class Form extends React.Component{
constructor(){
    super();
    this.state = {value: "write your name"};
}

    handleFormSubmit =(event) => {
        event.preventDefault();
        let value= document.querySelector("#name").value;
        alert(value);
    }

    handleInputChange(event){
        this.setState({value:event.target.value});
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input id ="name" type="text"/>
                <input type="submit"/> 
            </form>
            

        );
    }
}
export default Form;