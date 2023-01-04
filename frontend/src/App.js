import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Import the Login and Home components
import Login from './components/Login'
import Home from './container/Home'

const App = () => {
  // Hook to allow programmatic navigation
  const navigate = useNavigate()

  // Check if user is logged in on initial render and redirect to login if not
  useEffect(() => {
    const User =
      localStorage.getItem('user') !== 'undefined'
        ? JSON.parse(localStorage.getItem('user'))
        : localStorage.clear()

    if (!User) navigate('/login')
  })

  // Render the Login component if on the '/login' route, otherwise render the Home component
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
