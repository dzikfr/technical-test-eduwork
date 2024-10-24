import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    // Navigasi ke halaman edit dengan id produk
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
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th> {/* Tambahkan kolom actions */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.pd_id}>
              <td>{product.pd_id}</td>
              <td>{product.pd_code}</td>
              <td>{product.pd_ct_id ? product.pd_ct_id.ct_name : "N/A"}</td>
              <td>{product.pd_name}</td>
              <td>{product.pd_price}</td>
              <td>
                <button onClick={() => handleEdit(product.pd_id)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => navigate("create")}>create</button>
      </div>
    </div>
    // <div>
    //     tes
    // </div>
  );
};

export default ReadProduct;
