import React from 'react';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App