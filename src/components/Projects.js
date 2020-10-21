import React from 'react';
import './Projects.css';

const Projects = () => {
    return(
        <div id='project-par' className='container'>
            <h1 className='projects-header'>Projects</h1>
            <div className='columns is-1-mobile is-desktop'>
                <div className="column is-one-third card">
                        <div className="card-image">
                            <figure className="image is-3by2">
                            <img src={require("./resources/the-great-outdoors.jpeg")} alt="The Great Outdoors Website" />
                            </figure>
                        </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">The Great Outdoors</p>
                                <p className="subtitle is-6">e-commerce site</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>Grace-Shopper is an e-commerce web application which consists of front-end components to create an intuitive user experience using JavaScript and React. It also features a relational backend with routes to maintain current inventory and user profiles using Webpack, Express, PostgresSQL, and Node. This project was completed through collaborating in a team of 4 full-stack developers during a 4 week sprint using agile workflow.</p>
                            <br/>
                            <div className="links">
                            <a href="https://github.com/gwren19/grace-shopper" target="_blank" rel="noopener noreferrer">Github</a> || <a href="https://shrouded-forest-67857.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column id-one-third card">
                        <div className="card-image">
                            <figure className="image is-3by2">
                            <img src={require("./resources/calculator.jpeg")} alt="Calculator" />
                            </figure>
                        </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">Calculator</p>
                                <p className="subtitle is-6">four-function calculator</p>
                            </div>
                        </div>
                        <div className="content">
                            <p>This calculator does it all.  It does everything from adding, to subtracting, to multiplying, and yes, dividing.</p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="links">
                                <a href="https://github.com/gwren19/Calculator" target="_blank" rel="noopener noreferrer">Github</a> || <a href="https://wizardly-mahavira-6637d5.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;