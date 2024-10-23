import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    ct_id: "",
    ct_code: "",
    ct_name: "",
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
        "http://localhost:3000/api/category",
        formData
      );
      console.log("Data berhasil dikirim:", response.data);

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
    <div>
      <h2>Form Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Category:</label>
          <input
            type="number"
            name="ct_id"
            value={formData.ct_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Code Category:</label>
          <input
            type="text"
            name="ct_code"
            value={formData.ct_code}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Name Category:</label>
          <input
            type="text"
            name="ct_name"
            value={formData.ct_name}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Simpan Order</button>
      </form>
    </div>
  );
};

export default CreateCategory;
