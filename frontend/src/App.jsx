import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Course from './pages/home/Courses'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  )
}

export default App
