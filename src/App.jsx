import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'
import HowWorks from './Components/HowItWorks/HowItWorks'
import AboutUs from './Pages/AboutUs/AboutUs'
import TherapistsPage from './Pages/Therapists/TherapistsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Services from './Pages/Services/Services'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/psychologists' element={<TherapistsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </>)
}
export default App;