import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Courses from './pages/home/Courses'
import Signup from './components/Signup'
import { useAuth } from './context/Authprovider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />

      </div>
    </>
  )
}

export default App
