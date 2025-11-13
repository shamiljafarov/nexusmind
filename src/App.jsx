import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'
import HowWorks from './Components/HowItWorks/HowItWorks'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HowWorks />} />
      </Routes>
    </>)
}
export default App;