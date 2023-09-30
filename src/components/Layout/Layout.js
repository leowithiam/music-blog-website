import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../styles/global.css'

export default function Layout({ children }) {
  return (
    <div>
        <Header />
            <div>
                { children }
            </div>
        <Footer />
    </div>
  )
}