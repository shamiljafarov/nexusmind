import React from 'react' 
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
    <Header/>
      <Routes> 
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>  
  )}
export default App;