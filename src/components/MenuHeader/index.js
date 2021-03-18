import NavBar from "./Navbar";
import Menu from "./Menu";
import { useState } from "react";


const MenuHeader = ({ bgActiv }) => {

    const [isOpen, setOpen] = useState(null);

    const handleClickHamburger = () => {
        setOpen(prevState => !prevState);
    }
    return (
        <>
            <Menu isOpen={isOpen} />
            <NavBar isOpen={isOpen} bgActiv={bgActiv} onClickHamburger={handleClickHamburger} />
        </>
    );
}

export default MenuHeader;