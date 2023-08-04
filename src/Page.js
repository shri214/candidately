import React from 'react'
import Header from './Component/Header'
import "./Page.css"
import LogoCarousel from './Component/Dashboard/Carousel'
import LogoCarousels from './Component/Dashboard/secondCarousel'
import UpperContainer from './Component/Dashboard/UpperContainer'
import CombinedCards from './Component/CombinedCard'
import Footer from './Component/Footer'

function Page() {
  return (
    <>
    <Header/>
    <UpperContainer/>
    <LogoCarousel/>
    <LogoCarousels/>
    <LogoCarousel/>
    <CombinedCards/>
    <Footer/>
    </>
  )
}

export default Page