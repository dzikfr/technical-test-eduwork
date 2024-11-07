import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TableRead from "../TableRead";

const ReadUser = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const columns = [
    { header: "ID", accessor: (item) => item.us_id },
    { header: "Username", accessor: (item) => item.us_name },
    { header: "Password", accessor: (item) => item.us_password },
    { header: "Email", accessor: (item) => item.us_email },
    { header: "Nomor HP", accessor: (item) => item.us_phone_number },
    { header: "Alamat", accessor: (item) => item.us_address },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/user`);
        setUsers(response.data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    getUsers();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/user/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Ingin menghapus user?")) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_BACKEND_PORT}/api/user/${id}`
        );

        if (response.status === 200) {
          setUsers(users.filter((category) => category._id !== id));
          alert("User telah dihapus.");
        } else {
          console.error("Gagal menghapus user");
          alert("Gagal menghapus user");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredUsers = users.filter((user) =>
    user.us_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.us_email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold text-center mb-6 pt-3">User</h1>
      <input
        type="text"
        placeholder="Search by username or email"
        className="input input-bordered w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableRead
        columns={columns}
        data={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ReadUser;
