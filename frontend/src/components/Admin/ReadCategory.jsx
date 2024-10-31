import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TableRead from "../TableRead";

const ReadCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const columns = [
    { header: "ID", accessor: (item) => item.ct_id },
    { header: "Code", accessor: (item) => item.ct_code },
    { header: "Category", accessor: (item) => item.ct_name },
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/category`);
        setCategories(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getCategories();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/category/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ingin menghapus kategori?")) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_PORT}/api/category/${id}`
        );

        if (response.status === 200) {
          setCategories(categories.filter((category) => category._id !== id));
          alert("Kategori telah dihapus.");
        } else {
          console.error("Gagal menghapus kategori.");
          alert("Gagal menghapus kategori.");
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
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Category</h1>
      <Link to={"/admin/category/create"} className="btn">
        Add +
      </Link>
      <TableRead
        columns={columns}
        data={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ReadCategory;
