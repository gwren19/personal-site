import React from 'react';
import './Skills.css';

const Skills = () => {
    return(
        <div id='skills' className='container is-fluid'>
            <div className='notification'>
                <h1 className='skills-header'>Skills</h1>
            </div>
            <div id='column-skills' className="columns is-desktop">
                <div className="column">
                    <p id='skills-title'>Proficient</p>
                    <p id='skills-item' className='heading'>JavaScript</p>
                    <p id='skills-item' className='heading'>Node.JS</p>
                    <p id='skills-item' className='heading'>React</p>
                    <p id='skills-item' className='heading'>jQuery</p>
                    <p id='skills-item' className='heading'>PostgreSQL</p>
                    <p id='skills-item' className='heading'>CSS</p>
                    <p id='skills-item' className='heading'>HTML</p>
                </div>
                <div className="column">
                    <p id='skills-title'>Knowledgeable</p>
                    <p id='skills-item' className='heading'>Express</p>
                    <p id='skills-item' className='heading'>Angular</p>
                    <p id='skills-item' className='heading'>SCSS</p>
                </div>
                <div className="column">
                    <p id='skills-title'>Some Familiarity</p>
                    <p id='skills-item' className='heading'>TypeScript</p>
                    <p id='skills-item' className='heading'>Ruby</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;