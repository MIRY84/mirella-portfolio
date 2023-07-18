import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Skills from './components/Skills';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
       
      
      
    </>
  )
}

export default App
