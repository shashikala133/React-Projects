import React from "react"
import ThemeToggler from "./ThemeToggler"
const Header=() => {
    return(
        <header>
            <h1 style={{
                textAlign:"center"
            }}>THEME TOGGLER</h1>
            <ThemeToggler/>
        </header>

    )
}
export default Header;