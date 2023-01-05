import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import { Login } from './components'
import Home from './container/Home'

const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
