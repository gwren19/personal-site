import React from 'react';
import { Transition } from 'react-spring/renderprops';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {

    const items = [
    <>
        <p className="title">
        Hi, my name is Garrett Wren!
        </p>
        <p className="subtitle">
        Full Stack Software Developer
        </p>
    </>
    ];

    return(
        <section id='my-hero' className="hero is-info is-large is-bold is-mobile">
        <div className="hero-head">
            <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                    <Link id='menu-button' className="navbar-item is-active"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration= {500}
                    >
                    Home
                    </Link>
                    <Link id='menu-button' className="navbar-item"
                        activeClass="active"
                        to="about-box"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration= {500}
                    >
                    About Me
                    </Link>
                    <Link id='menu-button' className="navbar-item"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration= {500}                    
                    >
                    Skills
                    </Link>
                    <Link id='menu-button' className="navbar-item"
                        activeClass="active"
                        to="project-par"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}                    
                    >
                    Projects
                    </Link>
                    <span className="navbar-item">
                    <a id='git-button' className="button is-info is-inverted" href='https://github.com/gwren19' target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                        <i className="fab fa-github"></i>
                        </span>
                        <span>My Git</span>
                    </a>
                    </span>
                </div>
                </div>
            </div>
            </nav>
        </div>
        <div className="hero-body">
            <div className="container">
                <Transition
                    items={items} keys={item => item.key}
                    from={{ transform: 'translate3d(0,-300px,0)' }}
                    enter={{ transform: 'translate3d(0,0px,0)' }}
                    config={{ mass: 1, friction: 70 }}>
                    {item => props => <div id='title-name' className='main-title' style={props}>{item}</div>}
                </Transition>
            </div>
        </div>
        </section>
    )
}

export default Hero;