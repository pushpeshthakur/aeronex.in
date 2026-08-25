import React from 'react';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<About />} />

      <Route path='/admin-portal/login' element={<AdminLogin />} />
      <Route path='/admin-portal/dashboard' element={<AdminDashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App