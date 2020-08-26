import React from 'react';
import ReactDOM from 'react-dom';
import { Hero, AboutMe, Skills, Projects, Footer } from './components'

const App = () => {
    return(
        <>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('main')
);
