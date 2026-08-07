import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import QuoteForm from "../components/QuoteForm";

const ProductsPage = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <Navbar onOpenQuote={() => setShowQuoteForm(true)} />
      <Products />

      {showQuoteForm && (
        <div>
          <QuoteForm onCloseQuote={() => setShowQuoteForm(false)} />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
