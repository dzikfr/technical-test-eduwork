import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import CreateOrder from './pages/CreateOrder';
import CreateCategory from './pages/CreateCategory';
import ReadProduct from './pages/ReadProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/product/create" element={<CreateProduct/>} />
        <Route path="/admin/product" element={<ReadProduct/>} />
        <Route path="/admin/order/create" element={<CreateOrder/>} />
        <Route path="/admin/category/create" element={<CreateCategory/>} />
        <Route path="/admin/product/edit/:id" element={<EditProduct/>} />
      </Routes>
    </Router>
  );
};

export default App;
