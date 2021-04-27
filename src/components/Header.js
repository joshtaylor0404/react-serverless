import React, { useState, useEffect } from "react";

const Header = () => {
    // state
    const [menuLinksData, setMenuLinksData] = useState([]);

    // effects
    useEffect(() => {
        loadMenuLinksData();
    }, []);

    // methods
    const loadMenuLinksData = async () => {
        const response = await fetch('https://84rizytwqa.execute-api.us-west-2.amazonaws.com/Production/menu-links', { method: "GET" });
        const jsonData = await response.json();
        setMenuLinksData(jsonData);
    };

    // render
    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
            </article>

            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {menuLinksData.map(link => {
                            return (
                                <li key={link.href}>
                                    <a className={`icon ${link.class}`} href={link.href}>{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;