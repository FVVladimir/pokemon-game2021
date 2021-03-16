import React from 'react';
import cn from 'classnames';
import s from './style.module.css';
import { useState } from 'react';




const NavBar = () => {

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
    </p>
                <a className={cn(s.menuButton, s.active)}>
                    <span />
                </a>
            </div>
        </nav>
    );

}


export default NavBar;