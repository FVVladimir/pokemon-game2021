import NavBar from "./Navbar";
import Menu from "./Menu";
import { useState } from "react";


const MenuHeader = () => {
    return (
        <>
            <Menu />
            <NavBar />
        </>
    );
}

export default MenuHeader;