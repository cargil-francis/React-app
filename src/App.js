import React from "react";
import axios from "axios";
import Search from "./components/Search";


class App extends React.Component{
    render(){
        return (
            <div className="ui grid container center aligned">
                <div className="column six wide">
                    <Search />
                </div>
        
        </div>
        );
    }
}
export default App;

