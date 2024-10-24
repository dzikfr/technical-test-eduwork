import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-screen p-4">
        <div className="border border-gray-300 p-4 flex items-center justify-center">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Product</h2>
            <div className="card-actions">
              <Link to={"/admin/product"} className="btn">
                Go
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4 flex items-center justify-center">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Category</h2>
            <div className="card-actions">
              <Link to={"/admin/category"} className="btn">
                Go
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4 flex items-center justify-center">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Order</h2>
            <div className="card-actions">
              <Link to={"/admin/order"} className="btn">
                Go
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 p-4 flex items-center justify-center">
          <div className="card-body items-center text-center">
            <h2 className="card-title">User</h2>
            <div className="card-actions">
              <Link to={"/admin/user"} className="btn">
                Go
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
