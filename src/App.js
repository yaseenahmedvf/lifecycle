import './App.css';
import Body from './components/Body';
import FunctionBase from './components/FunctionBase';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import Bank from './components/Bank';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [mode, setMode] = useState('light')
const toggleMode = () => {
  if(mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#49525b';
    document.body.style.color = 'white';
  }else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home mode={mode}/>} />
            <Route path="/lifecycle" element={<Body />} />
            <Route path="/hooks" element={<FunctionBase />} />
            <Route path="/redux" element={<Bank />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
