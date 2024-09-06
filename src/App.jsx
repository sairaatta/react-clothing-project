import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Product from './pages/Product';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/aboutus' element={<Aboutus />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/productdetail' element={<ProductDetail />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App