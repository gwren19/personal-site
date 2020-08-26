import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return(
        <div id='about-box' className='container is-fluid'>
            <div className='notification'>
            <h1 className='about-header'>About Me</h1>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image">
                        <img className='self-photo' src={require("./resources/IMG_8667.jpeg")} alt="" />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>For as long as I can remember, I’ve always wanted to work with computers.  But, like a lot of people in the industry, it wasn’t exactly a straight path to get here.  For 5 years, I worked in the nonprofit industry overseeing multiple programs.  I got a lot of satisfaction from this work because I enjoy driving projects from start to finish, collaborating with internal and external stakeholders, and meeting deadlines, which meant people in need were getting the support they needed.  I loved working in the nonprofit industry, giving back, but I realized that tech was also an avenue to create products that improve people’s lives while fulfilling my passion of working with computers.  To do that, I needed to broaden my skillset.  So I decided to enroll in Fullstack Academy which has a strong focus on the fundamentals of computer coding and problem solving, while collaborating in a team setting.  I gained fluency in multiple languages and frameworks including: Javascript, Node, React, PostgreSQL, Express, jQuery, CSS, and HTML.  Up next, I want to work for a company that builds products that daily users love and give back my knowledge to the tech community.</p>
                        <p id='about-buttons' className='buttons'>
                                <a className="button is-info" href='https://drive.google.com/file/d/1Kh5crAxU7H0-mfEAtJo0PIazsxvoWOUq/view?usp=sharing' target='_blank' rel="noopener noreferrer">
                                    <span class="icon">
                                    <i className='far fa-file-pdf'></i>
                                    </span>
                                    <span>My Resume</span>
                                </a>
                                <a className="button is-info" href='https://www.linkedin.com/in/gwren19' target='_blank' rel="noopener noreferrer">
                                    <span class="icon">
                                    <i class="fab fa-linkedin"></i>
                                    </span>
                                    <span>Linkedin</span>
                                </a>
                                <a className="button is-info" href='https://github.com/gwren19' target='_blank' rel="noopener noreferrer">
                                    <span class="icon">
                                    <i class="fab fa-github"></i>
                                    </span>
                                    <span>GitHub</span>
                                </a>
                        </p>
                    </div>
                    </div>
                </article>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;