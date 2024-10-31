import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TableRead from "../../components/TableRead";

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
  ];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/order`);
        setOrders(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getOrders();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Order</h1>
      <TableRead
        columns={columns}
        data={orders}
      />
    </div>
  );
};

export default ReadOrder;
