import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    pd_id: "",
    pd_code: "",
    pd_ct_id: "",
    pd_name: "",
    pd_price: "",
  });

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

  return (
    <div>
      <h2>Form Produk</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Produk:</label>
          <input
            type="number"
            name="pd_id"
            value={formData.pd_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Kode Produk:</label>
          <input
            type="text"
            name="pd_code"
            value={formData.pd_code}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>ID Kategori Produk:</label>
          <input
            type="number"
            name="pd_ct_id"
            value={formData.pd_ct_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Nama Produk:</label>
          <input
            type="text"
            name="pd_name"
            value={formData.pd_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Harga Produk:</label>
          <input
            type="number"
            name="pd_price"
            value={formData.pd_price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Simpan Produk</button>
      </form>
    </div>
  );
};

export default CreateProduct;
