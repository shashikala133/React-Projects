import React from "react";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
const App = () =>{
    return(
        <div>
           <Navbar/>
           <HeroSection/>
           <AppSection/>
           <CardSection/>
           <Footer/>
        </div>
    )
}

export default App;