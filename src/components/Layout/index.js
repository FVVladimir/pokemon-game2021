import React from 'react';
import s from './style.module.css';

const Layout = ({ title, desc, urlBg, colorBg, children }) => {

    const ourStyle = {

        backgroundImage: `${urlBg}`,
        backgroundColor: `${colorBg}`
    }


    return (
        <section
            style={ourStyle}
            className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{desc}</p>
                        {children}
                    </div>
                </article>
            </div>
        </section >
    );
}

export default Layout;