import React from 'react';
import s from './style.module.css';
import cn from 'classnames';
import { useState } from 'react';

const Menu = () => {

    return (
        <div className={cn(s.menuContainer, s.actives, s.deactive)}>
            <div className={s.overlay}>
                <div className={s.menuItems}>
                    <ul>
                        <li>
                            <a href="#welcome">
                                HOME
        </a>
                        </li>
                        <li>
                            <a href="#game">
                                GAME
        </a>
                        </li>
                        <li>
                            <a href="#about">
                                ABOUT
        </a>
                        </li>
                        <li>
                            <a href="#contact">
                                CONTACT
        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;