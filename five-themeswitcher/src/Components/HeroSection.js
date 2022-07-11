import React,{useContext} from "react"
import AppTheme from "../Colors"
import ThemeContext from "../Context/ThemeContext"

const HeroSection = () => {
 const theme=useContext(ThemeContext)[0]
 const[themeMode,setThemeMode]=useContext(ThemeContext)
 const CurrentTheme=AppTheme[theme]
 return(
     <div
     style={{
         padding:"1rem",
         backgroundColor:`${CurrentTheme.backgroundColor}`,
         color:`${CurrentTheme.textColor}`,
         textAlign:"center"
     }}
     >
         <h1>Made by Shashikala</h1>
         <h2>Context API theme toggler</h2>
         <p>this is a nice paragraph</p>
         <button onClick={() => {
             setThemeMode(themeMode==="light"?"dark":"light")
         }} style={{
             backgroundColor:"#26ae60",
             padding:"10px 150px",
             fontSize:"20px",
             color:"#fff",
             border:`${CurrentTheme.border}`
         }

         }>click on me to chnage the theme</button>
     </div>
 )
}
export default HeroSection;