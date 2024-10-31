import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import LoginAdmin from './pages/Admin/LoginAdmin';
import Admin from './pages/Admin/DashboardAdmin';
import CreateProduct from './pages/Admin/CreateProduct';
import ReadOrder from './pages/Admin/ReadOrder';
import CreateCategory from './pages/Admin/CreateCategory';
import ReadProduct from './pages/Admin/ReadProduct';
import EditProduct from './pages/Admin/EditProduct';
import ReadCategory from './pages/Admin/ReadCategory';
import EditCategory from './pages/Admin/EditCategory';
import Shop from './pages/User/Shop';
import UserLogin from './pages/User/UserLogin';
import UserRegister from './pages/User/UserRegister';
import ReadUser from './pages/Admin/ReadUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* ADMIN ROUTE */}
        {/* TODO : ADD PROTECTEd ROUTE */}
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/product" element={<ReadProduct/>} />
        <Route path="/admin/category" element={<ReadCategory/>} />
        <Route path="/admin/product/create" element={<CreateProduct/>} />
        <Route path="/admin/order/" element={<ReadOrder/>} />
        <Route path="/admin/user" element={<ReadUser/>} />
        <Route path="/admin/category/create" element={<CreateCategory/>} />
        <Route path="/admin/product/edit/:id" element={<EditProduct/>} />
        <Route path="/admin/category/edit/:id" element={<EditCategory/>} />

        {/* USER ROUTE */}
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/register" element={<UserRegister/>}/>
      </Routes>
    </Router>
  );
};

export default App;
