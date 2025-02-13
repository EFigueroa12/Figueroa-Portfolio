import React from 'react'
import './MobileNav.css'
import catLogo from '../../../assets/cat.svg'

function MobileNav({isOpen, toggleMenu}) {
    
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth"});
        }
    };

    return (
        <>
        <div className={`mobile-menu ${isOpen ? "active":""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
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
            </div>
        </div>
        </>
    )

}
export default MobileNav