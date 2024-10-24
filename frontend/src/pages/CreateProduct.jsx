import React, { useState, useEffect } from "react";
import axios from "axios";

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
        "http://localhost:3000/api/product",
        formData
      );
      console.log("Data berhasil dikirim:", response.data);

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
        const response = await fetch("http://localhost:3000/api/category");
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="justify-center items-center flex">
      <form
        onSubmit={handleSubmit}
        className="rounded-none mt-20 p-6 w-80 justify-center items-center bg-gray-800"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>
        <div className="form-control mb-4">
          <label>ID Produk:</label>
          <input
            type="number"
            name="pd_id"
            value={formData.pd_id}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label>Kode Produk:</label>
          <input
            type="text"
            name="pd_code"
            value={formData.pd_code}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label>Kategori Produk:</label>
          <select
            name="pd_ct_id"
            value={formData.pd_ct_id}
            onChange={handleChange}
            className="input input-bordered"
            required
          >
            <option value="">Pilih Kategori</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.ct_name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control mb-4">
          <label>Nama Produk:</label>
          <input
            type="text"
            name="pd_name"
            value={formData.pd_name}
            onChange={handleChange}
            className="input input-bordered"
            required

          />
        </div>

        <div className="form-control mb-4">
          <label>Harga Produk:</label>
          <input
            type="number"
            name="pd_price"
            value={formData.pd_price}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <button type="submit" className="btn">Simpan Produk</button>
      </form>
    </div>
  );
};

export default CreateProduct;
