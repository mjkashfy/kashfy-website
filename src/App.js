import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import ContactMe from './components/pages/ContactMe';
import CreativePortfolio from './components/pages/CreativePortfolio'

function App() {
  return (

    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact  Component={Home} />
        <Route path='/portfolio' Component={Portfolio} />
        <Route path='/aboutMe' Component={AboutMe} />
        <Route path='/contactMe' Component={ContactMe} />
        <Route path='/creative-portfolio' Component={CreativePortfolio} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
