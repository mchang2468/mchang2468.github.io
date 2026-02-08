import React from "react"; 
import nyc from './nyc.jpeg';

const About = () => {
    return (
        <div>
            <img src={nyc} className="nyc" alt="nyc" />
            <h1>About</h1>
            <p>My name is Michael Chang, and I am from Bridgewater, New Jersey.</p>
            <p>I lived for 6 years in Shanghai and 13 years in New Jersey.</p>
            <p>I am now a freshman undergraduate student at Yale University who is studying statistics and data science.</p>
            <p>My favorite sports are basketball and tennis.</p>
            <p>Most importantly, I hope to make a positive, lasting impact on the world.</p>
        </div>
    );
}

export default About;