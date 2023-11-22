import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './Components/Tarea'
import Instrucciones from './Components/Instrucciones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicExample from './Components/Navbar/Navbar'
import { TemaProvider } from './Components/Context/ThemeContext'
import ThemeSwitch from './Components/ThemeSwitch'

function App() {

  return (
    <TemaProvider>
      <BrowserRouter>
        <BasicExample />
        <ThemeSwitch/>
        <Routes>
          <Route path='/' element={<Tarea />} />
          <Route path='/instructions' element={<Instrucciones />} />
        </Routes>
      </BrowserRouter>
    </TemaProvider>
  )
}

export default App
