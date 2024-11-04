import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TableRead from "../TableRead";

const ReadOrder = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const columns = [
    { header: "ID", accessor: (item) => item.or_id },
    { header: "Nama Produk", accessor: (item) => item.or_pd_id.pd_name },
    { header: "Nama User", accessor: (item) => item.or_us_id.us_name },
    { header: "Alamat", accessor: (item) => item.or_us_id.us_address },
    { header: "Jumlah", accessor: (item) => item.or_amount },
    { header: "Tanggal Pesan", accessor: (item) => Date(item.or_created_at) },
  ];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_PORT}/api/order`
        );
        setOrders(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getOrders();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/order/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ingin menghapus order?")) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_PORT}/api/order/${id}`
        );

        if (response.status === 200) {
          setOrders(orders.filter((order) => order._id !== id));
          alert("Order telah dihapus.");
        } else {
          console.error("Gagal menghapus order");
          alert("Gagal menghapus order");
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
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Order</h1>
      <TableRead
        columns={columns}
        data={orders}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ReadOrder;
