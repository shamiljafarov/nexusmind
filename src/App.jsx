import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Hero from './Pages/Hero/Hero'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/hero' element={<Hero />} />
      </Routes>
    </>)
}
export default App