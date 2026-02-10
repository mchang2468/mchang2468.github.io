import React from "react"; 
import yale from './yale.webp';
import rutgers from './rutgers.jpg';
import cornell from './cornell.png';

const Education = () => {
    return (
        <div>
            <h1>Education</h1>

            <h2>Yale University</h2>
            <img src={yale} className="yalepic" alt="Yale Pic" />
            <p>Attended from August 2025 to Present</p>
            <p>Pursuing a Bachelors of Science in Statistics and Data Science</p>
            <p>Expected Graduation: May 2029</p>
            <h3>Clubs and Societies:</h3>
            <ul>
                <li>Relevant Coursework: Linear Algebra, Data Exploration and Analysis, Econometrics, Information Systems</li>
                <li>Activities and Societies: Yale Men’s Basketball, Yale Daily News, Yale University Diversified Investments, Yale Media, Entertainment, and Sports Business Association, Design for America, Y/Labs, Yale Computer Society</li>
            </ul>

            <h2>Rutgers Preparatory School</h2>
            <img src={rutgers} className="rutgerspic" alt="Rutgers Pic" />
            <p>Attended from September 2021 to June 2025</p>
            <p>High School Diploma | Graduated June 2025</p>
            <p>GPA: 4.67 Weighted | SAT: 1570/1600</p>
            <ul>
                <li>Honors: Cum Laude, August H. Daviet Scholarship, Highest Academic Honors</li>
                <li>Relevant Coursework: Multivariable and Vector Calculus, Cybersecurity, Data Analysis with Python</li>
                <li>Activities and Societies: Tri-M Music Honors Society, National English Honor Society, Société Honoraire de Française, The Argo (School Newspaper), Speech and Debate Club, Orchestras, Basketball, Tennis, Senior Prefect</li>
            </ul>

            <h2>Cornell University</h2>
            <img src={cornell} className="cornellpic" alt="Cornell Pic" />
            <p>Attended from June 2023 to July 2023</p>
            <p>Completed COGST 1101/CS 1710: Introduction to Cognitive Science | GPA: 4.000</p>    
        </div>
    );
}

export default Education;