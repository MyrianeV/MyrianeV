import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Footer from './components/footer.jsx' 
import Navbar from './components/navbar.jsx'
import Portfolio from './pages/portfolio.jsx'
import AboutMe from './pages/aboutme.jsx'
import ScrollToTop from './components/ScrollToTop'


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar/>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Portfolio/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

