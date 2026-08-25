import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuoteForm from '../components/QuoteForm';

const About = () => {
    const [showQuoteForm, setShowQuoteForm] = useState(false);
  return (
    <>
    <Navbar onOpenQuote={() => setShowQuoteForm(true)}/>

    {showQuoteForm && (
        <div>
            <QuoteForm onCloseQuote={() => setShowQuoteForm(false)}/>
        </div>
    )}
    <Footer />
    </>
  )
}

export default About