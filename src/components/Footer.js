import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <a className="button is-info" id='footer-button' href='https://drive.google.com/file/d/1Kh5crAxU7H0-mfEAtJo0PIazsxvoWOUq/view?usp=sharing' target='_blank'>
                    <span class="icon">
                    <i className='far fa-file-pdf'></i>
                    </span>
                    <span>My Resume</span>
                </a>
                <a className="button is-info" id='footer-button' href='https://www.linkedin.com/in/gwren19' target='_blank'>
                    <span class="icon">
                    <i class="fab fa-linkedin"></i>
                    </span>
                    <span>Linkedin</span>
                </a>
                <a className="button is-info" href='https://github.com/gwren19' target='_blank'>
                    <span class="icon">
                    <i class="fab fa-github"></i>
                    </span>
                    <span>GitHub</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;