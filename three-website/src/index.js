import React,{useState} from "react";
const GranChild=(props) => {
    return(
        <div>
            <h3>Grand child:{props.brand}</h3>
            <Child brand={build}/>
        </div>
    )
}




const Child = props => {
    return(
        <div>
            <h1>child {props.brand}</h1>
        </div>
    )
}
const App=() => {
    const[build] = useState("amazon")
    return(
        <div>
            <h1>Hello</h1>
           
            <GranChild/>
        </div>
    )
}
export default App;