import React, { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
// import Certification from './components/Certification/Certification';
import Course from './components/Course/Course';
import Resume from './components/Resume/Resume';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? 'no-scroll' : 'scroll'}>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    {/* <Route path="/education" element={<Education />} /> */}
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/education" element={<Education />} />
                    {/* <Route path="/project" element={<Project />} /> */}
                    {/*<Route path="/certification" element={<Certification />} />*/}
                    <Route path="/course" element={<Course />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

