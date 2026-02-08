import React from "react";
import MCPFP from './MCPFP.jpeg';

const Home = () => {
    return (
        <div>
            <img src={MCPFP} className="mcpfp" alt="mcpfp" />
            <h1>Michael Chang's Portfolio</h1>
            <div>
                <a href="https://www.linkedin.com/in/michael-chang-12aa17303/" target="_blank">
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-png-transparent.png" className="logo" alt="LinkedIn Logo" />
                </a>
                <a href="https://drive.google.com/file/d/1UimJPzShCiM7rlUYOV6rF-T6eyHkhQe6/view?usp=sharing" target="_blank">
                    <img src="https://static.vecteezy.com/system/resources/previews/055/533/475/large_2x/a-sleek-transparent-pen-with-a-silver-clip-resting-on-a-minimalistic-transparent-background-pen-transparent-background-free-png.png" className="logo" alt="Resume Logo" />
                </a>
            </div>
            <p>menchang.06@gmail.com</p>
        </div>
    );
}

export default Home;