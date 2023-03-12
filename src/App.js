import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact'; 


function App() {
  return (
    <div className="App background">

    <Router>
      <>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path='/aboutme' element={<AboutMe />} />

        <Route exact path='/contact' element={<Contact />} />

      </Routes>
      </>
    </Router>

    </div>
  );
};

export default App;
