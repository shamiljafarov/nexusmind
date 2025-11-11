import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import MainPage from './Pages/Main/MainPage'

function App() {
  return (
    <>
      <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<Login />} />
      </Routes>
    </>)
}
export default App