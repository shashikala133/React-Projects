import React from "react"
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import AppSection from "./Appsection";
import CardSection from "./Cardsection";
import Footer from "./Footer";
const App = () => {
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