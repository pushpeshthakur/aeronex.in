import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Try from '../components/Try'
import WhyChoose from '../components/WhyChoose'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <WhyChoose />
    <Try />
    </>
  )
}

export default Home