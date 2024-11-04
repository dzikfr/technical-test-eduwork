import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import CreateProduct from "./pages/Admin/CreateProduct";
import CreateCategory from "./pages/Admin/CreateCategory";
import EditProduct from "./pages/Admin/EditProduct";
import EditCategory from "./pages/Admin/EditCategory";
import Shop from "./pages/User/Shop";
import UserLogin from "./pages/User/UserLogin";
import UserRegister from "./pages/User/UserRegister";
import MainDashboard from "./pages/Admin/MainDashboard";
import ProtectedRoute from "./pages/Admin/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ADMIN ROUTE */}
        <Route path="/admin/login" element={<LoginAdmin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <MainDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/product/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/category/create"
          element={
            <ProtectedRoute>
              <CreateCategory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/product/edit/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/category/edit/:id"
          element={
            <ProtectedRoute>
              <EditCategory />
            </ProtectedRoute>
          }
        />

        {/* USER ROUTE */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
