import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'
import HowWorks from './Components/HowItWorks/HowItWorks'
import AboutUs from './Pages/AboutUs/AboutUs'
import TherapistsPage from './Pages/Therapists/TherapistsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/psychologists' element={<TherapistsPage/>}/>
      </Routes>
    </>)
}
export default App;