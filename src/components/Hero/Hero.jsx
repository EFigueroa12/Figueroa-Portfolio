import React from 'react'
import './Hero.css'
import catLogo from '../../assets/cat.svg'
import ReactIcon from '../../assets/images/react.png'
import VueIcon from '../../assets/images/vue.png'
import RubyIcon from '../../assets/images/ruby.png'
import PythonIcon from '../../assets/images/python.png'

function Hero() {
    return (
        <>
         <section className='hero-container' id="home">
            <div className='hero-content'>
                <h2> Elizabeth Figueroa  Digital Portfolio </h2>
                <p>
                    Passionate Software Developer | Transforming Ideas Into Software Solutions
                </p>
            </div>
            <div className='hero-img'>
                <div>
                    <img className="logo" src={catLogo} alt=""/>
                </div>
                <div>
                    <div className='tech-icon'>
                        <img className="logo" src={PythonIcon} alt=""/>
                    </div>
                    <div className='tech-icon'>
                        <img className="logo" src={ReactIcon} alt=""/>
                    </div>
                    <div className='tech-icon'>
                        <img className="logo" src={VueIcon} alt=""/>
                    </div>
                    <div className='tech-icon'>
                        <img className="logo" src={RubyIcon} alt=""/>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Hero