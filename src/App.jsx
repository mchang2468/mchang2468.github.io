import {useState} from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter, Link} from 'react-router-dom'
import Home from './containers/home/index.jsx'
import About from './containers/about/index.jsx'
import Projects from './containers/projects/index.jsx'
import Research from './containers/research/index.jsx'
import Experiences from './containers/experiences/index.jsx'
import SkillsAndPassions from './containers/skillsandpassions/index.jsx'
import Education from './containers/education/index.jsx'
import AwardsAndHonors from './containers/awardsandhonors/index.jsx'

function App() {
  return (
    <>
      <div className="App">
        {/* particles js */}

        <BrowserRouter basename="/mc.github.io">
          {/* Navigation */}
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/education">Education</Link> |{" "}
            <Link to="/experiences">Experiences</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/research">Research</Link> |{" "}
            <Link to="/awardsandhonors">Awards and Honors</Link> |{" "}
            <Link to="/skillsandpassions">Skills and Passions</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/awardsandhonors" element={<AwardsAndHonors />} />
            <Route path="/skillsandpassions" element={<SkillsAndPassions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
