import React from 'react'
import "./style.css"
import Button from './Button'
const App = () =>{
    return(
        <div>
        <h1 style = {{textAlign:'center'}}>hello world!!!!</h1>
        {/*<button className="button">App Store</button>
        <button className="button">Play Store</button>*/}
        <Button title="App Store" button="button1"/>
        <Button title="Play Store" button="button2"/>
        
        </div>
    )
}
export default App;