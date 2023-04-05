import React from 'react'
import Header from './header'
import Nav from './nav'
import Main from './main'
import Footer from './footer'
import "./Layout.css"

const Layout = () => {
  return (
    <div className='layuot'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
