import React,{ useContext } from "react";
import ThemeContext from "../Context/ThemeContext"
const ThemeToggler = () => {
    const[themeMode,setThemeMode]=useContext(ThemeContext);
    return(
        <div
        onClick={() => {
            setThemeMode(themeMode==="light"?"dark":"light")
        }}
        > 
        <span>
            <button style={{
            backgroundColor:"pink",
            padding:"10px 100px",
            fontSize:"20px",
            color:"#000",
            marginBottom:"10px",
            marginLeft:"630px",
            fontFamily:"sans-serif"
        }} >{themeMode==="light"?"turn off":"lights on"}</button></span></div>
    )
}
export default ThemeToggler;