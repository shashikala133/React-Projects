import React from "react";
import "./style.css"
import Button from "./Button";

const App = () =>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>hello world</h1>
            <Button title="App Store"/>
            <Button title="Play Store"/>
            <Button />
           {/* <button className="button1">App store</button>
            <button className="button2">Play store</button>*/}
        </div>
    )
}
export default App;