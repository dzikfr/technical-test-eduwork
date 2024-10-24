import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ReadCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/category");
        setCategories(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getCategories();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleEdit = (id) => {
    navigate(`/admin/category/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ingin menghapus kategori?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/category/${id}`
        );

        if (response.status === 200) {
          window.location.reload();
        } else {
          console.error("Gagal menghapus produk.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">Category</h1>
      <Link to={"/admin/category/create"} className="btn">
        Add +
      </Link>
      <div className="overflow-x-auto">
        <table className="table table-zebra rounded-none border-black-200 bg-gray-800">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {categories.map((category) => (
              <tr key={category.ct_id}>
                <td>{category.ct_id}</td>
                <td>{category.ct_code}</td>
                <td>{category.ct_name}</td>
                <td>
                  <button
                    onClick={() => handleEdit(category._id)}
                    className="btn btn-sm"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(category._id)}
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

export default ReadCategory;

