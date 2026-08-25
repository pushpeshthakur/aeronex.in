import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import Products from '../components/Products'
import Try from '../components/Try'
import WhyChoose from '../components/WhyChoose'
import QuoteForm from '../components/QuoteForm'
import Footer from '../components/Footer'


const Home = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  return (
    <>
    <Navbar onOpenQuote={() => setShowQuoteForm(true)} />
    <Hero onOpenQuote={() => setShowQuoteForm(true)}/>

      {showQuoteForm && (
        <div  >
        
          <QuoteForm onCloseQuote={() => setShowQuoteForm(false)}/>
          
        </div>
      )}

    {/* <Products /> */}
    <WhyChoose />
    <Try />
    <Footer />
    </>
  )
}

export default Home