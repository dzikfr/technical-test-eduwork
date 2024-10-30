import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "../../components/CreateForm";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    pd_id: "",
    pd_code: "",
    pd_ct_id: "",
    pd_name: "",
    pd_price: "",
  });

  const [categories, setCategories] = useState([]);

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
        `${import.meta.env.VITE_BACKEND_PORT}/api/product`,
        formData
      );

      if (response.status === 200) {
        alert("Data produk berhasil ditambahkan");
        console.log("Data berhasil dikirim:", response.data);
      } else {
        console.error("Gagal menambahkan data produk:", response.data);
      }

      setFormData({
        pd_id: "",
        pd_code: "",
        pd_ct_id: "",
        pd_name: "",
        pd_price: "",
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/category`);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil data kategori:", error);
      }
    };

    fetchCategories();
  }, []);

  const fields = [
    { label: "ID Produk", name: "pd_id", type: "number", required: true },
    { label: "Kode Produk", name: "pd_code", type: "text", required: true },
    {
      label: "Kategori Produk",
      name: "pd_ct_id",
      type: "select",
      required: true,
      options: categories.map((category) => ({
        value: category._id,
        label: category.ct_name,
      })),
    },
    { label: "Nama Produk", name: "pd_name", type: "text", required: true },
    { label: "Harga Produk", name: "pd_price", type: "number", required: true },
  ];

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

export default CreateProduct;
