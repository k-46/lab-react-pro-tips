import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Registration } from './components/Registration'
import { Contact } from './components/Contact'


// Contact Home Registration Contact

function App() {


  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/registration' element={<Registration/>} />

      </Routes>
    </div>
  )
}

export default App
