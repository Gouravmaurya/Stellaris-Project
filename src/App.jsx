import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Services from './pages/services'
import About from './pages/about.jsx'
import ScrollToTop from './component/ScrollToTop'
import SmoothScrollProvider from './component/SmoothScrollProvider'
import { AnimatePresence } from 'framer-motion'
import './App.css'

const App = () => {
  return (
    <SmoothScrollProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </SmoothScrollProvider>
  )
}

export default App
