import React from "react"; 
import yale from './yale.webp';
import rutgers from './rutgers.jpg';
import cornell from './cornell.png';

const Education = () => {
    return (
        <div>
            <h1>Education</h1>

            <h2>Yale University</h2>
            git push -u origin main
            <p>Attended from August 2025 to Present</p>
            <p>Pursuing a Bachelors of Science in Statistics and Data Science</p>
            <p>Expected Graduation: May 2029</p>
            <h3>Clubs and Societies:</h3>
            <ul>
                <li>Yale Men’s Basketball</li>
                <li>Yale Computer Society</li>
                <li>Yale Daily News</li>
                <li>Yale University Diversified Investments</li>
                <li>Yale Media, Entertainment Sports Business Association</li>
                <li>Design for America</li>
                <li>Y/Labs</li>
            </ul>

            <h2>Rutgers Preparatory School</h2>
            <img src={rutgers} className="rutgerspic" alt="Rutgers Pic" />
            <p>Attended from September 2021 to June 2025</p>
            <p>High School Diploma | Graduated June 2025</p>
            <p>GPA: 4.67 Weighted | SAT: 1570/1600</p>
            <h3>Clubs and Societies:</h3>
            <ul>
                <li>Rutgers Prep Boys' Basketball Team</li>
                <li>Rutgers Prep Boys' Tennis Team</li>
                <li>Speech and Debate Club</li>
                <li>The Argo</li>
                <li>The Argo Jr.</li>
                <li>Model United Nations</li>
                <li>Upper School Orchestra</li>
                <li>Chamber Orchestra</li>
                <li>Senior Prefect</li>
                <li>Rutgers Prep Summer Programs</li>
            </ul>

            <h2>Cornell University</h2>
            <img src={cornell} className="cornellpic" alt="Cornell Pic" />
            <p>Attended from June 2023 to July 2023</p>
            <p>Completed COGST 1101/CS 1710: Introduction to Cognitive Science | GPA: 4.000</p>    
        </div>
    );
}

export default Education;