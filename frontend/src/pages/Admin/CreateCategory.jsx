// CreateCategory.js
import React, { useState } from "react";
import axios from "axios";
import CreateForm from "../../components/CreateForm";

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    ct_id: "",
    ct_code: "",
    ct_name: "",
  });

  const fields = [
    { label: "ID Category", name: "ct_id", type: "number", required: true },
    { label: "Code Category", name: "ct_code", type: "text", required: true },
    { label: "Name Category", name: "ct_name", type: "text", required: true },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_PORT}/api/category`,
        formData
      );

      if (response.status === 200) {
        alert("Data kategori berhasil ditambahkan");
        console.log("Data berhasil dikirim:", response.data);
      } else {
        console.error("Gagal menambahkan data kategori:", response.data);
      }

      setFormData({
        ct_id: "",
        ct_code: "",
        ct_name: "",
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
    }
  };

  return (
    <div className="justify-center items-center flex">
      <CreateForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={fields}
      />
    </div>
  );
};

export default CreateCategory;
