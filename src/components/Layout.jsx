import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className='main-content min-h-screen' >
            {children}
        </div>
        <Footer/>

    </div>
  )
}

export default Layout