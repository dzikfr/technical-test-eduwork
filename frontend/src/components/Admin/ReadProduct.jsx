import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TableRead from "../TableRead";

const ReadProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const columns = [
    { header: "ID", accessor: (item) => item.pd_id },
    { header: "Code", accessor: (item) => item.pd_code },
    {
      header: "Category",
      accessor: (item) => (item.pd_ct_id ? item.pd_ct_id.ct_name : "N/A"),
    },
    { header: "Name", accessor: (item) => item.pd_name },
    { header: "Price", accessor: (item) => item.pd_price },
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PORT}/api/product`
        );
        setProducts(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getProducts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ingin menghapus produk?")) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_PORT}/api/product/${id}`
        );

        if (response.status === 200) {
          setProducts(products.filter((product) => product._id !== id));
          alert("Produk telah dihapus.");
        } else {
          console.error("Gagal menghapus produk.");
          alert("Gagal menghapus produk.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Product</h1>
      <Link to={"/admin/product/create"} className="btn">
        Add +
      </Link>
      <TableRead
        columns={columns}
        data={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ReadProduct;
