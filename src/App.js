import './App.css';
import React from 'react';
import Homepage from './Homepage'
import { Routes, Route, Link} from 'react-router-dom';
import AboutMe from './AboutMe';
import NavBar from './NavBar';
function App() {
  
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/bedtime-tales/' element={<Homepage/>}></Route>
        <Route path='/bedtime-tales/about-me' element={<AboutMe/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
