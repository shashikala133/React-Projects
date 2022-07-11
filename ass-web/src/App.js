import React from "react";
import NavBar from "./Navbar";
import "./style.css"
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import About from "./About"
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
const App=() => {
    return(
        <div>
            <h1>shashikala</h1>
            <NavBar/>
            <Masthead/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default App;