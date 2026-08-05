import { useState } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Navigate to={'home'}/>}/>
          <Route path='home' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
