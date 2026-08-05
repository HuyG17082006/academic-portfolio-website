import React from 'react'

import { Outlet } from 'react-router'

import Header from '../components/shared/Header/Header.jsx'
import Footer from '../components/shared/Footer/Footer.jsx'

import './MainLayout.scss'

export default function MainLayout() {
  return (
    <div className='main-layout'>
        <Header/>

        <main>
            <Outlet/>
        </main>

        <Footer/>

    </div>
  )
}
