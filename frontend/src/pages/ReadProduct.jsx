import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ReadProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/product");
        setProducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("ingin menghapus produk?")) {
      try {
        await fetch(`http://localhost:3000/api/product/${id}`, {
          method: "DELETE",
        });
        setProducts(products.filter((product) => product.pd_id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Product</h1>
      <Link to={"/admin/product/create"} className="btn">Add +</Link>
      <div className="overflow-x-auto">
        <table className="table table-zebra rounded-none border-black-200">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product) => (
              <tr key={product.pd_id}>
                <td>{product.pd_id}</td>
                <td>{product.pd_code}</td>
                <td>{product.pd_ct_id ? product.pd_ct_id.ct_name : "N/A"}</td>
                <td>{product.pd_name}</td>
                <td>{product.pd_price}</td>
                <td>
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="btn btn-sm"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadProduct;
