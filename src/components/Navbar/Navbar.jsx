import React, { useState } from 'react'
import './Navbar.css'
import catLogo from '../../assets/cat.svg'
import MobileNav from './MobileNav/MobileNav';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth"});
        }
    };
    
    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={catLogo} alt=""/>
                    <ul>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("home")}>Home</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("skills")}>Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("experience")}>Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" onClick={() => scrollToSection("contact")}>Contact Me</a>
                        </li>
                    </ul>
                    <button class="menu-btn" onClick={toggleMenu}>
                        <span 
                            class={"material-symbols-outlined"}
                            style={{fontSize:"1.8rem"}}
                        >
                            {openMenu ? "close":"menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
