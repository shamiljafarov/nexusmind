import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'
import AboutUs from './Pages/AboutUs/AboutUs'
import TherapistsPage from './Pages/Therapists/TherapistsPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Services from './Pages/Services/Services'
import MainLayout from './Layout/MainLayout'
import ClientDashboardPage from './Pages/ClientDashboardPage/ClientDashboardPage'

function App() {
  return (
    <>
      <Routes>

        {/* loginsiz sehifeler */}

        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/psychologists' element={<TherapistsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/services' element={<Services/>}/>

        {/* login sonrasi sehifeler */}

        <Route path='/main' element={<MainLayout/>}>
          <Route path='client-dashboard' element={<ClientDashboardPage/>}/>
        </Route>

      </Routes>
    </>)
}
export default App;