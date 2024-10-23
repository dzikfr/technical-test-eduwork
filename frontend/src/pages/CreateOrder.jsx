import React, { useState } from "react";
import axios from "axios";

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    or_id: "",
    or_pd_id: "",
    or_amount: "",
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
        "http://localhost:3000/api/order",
        formData
      );
      console.log("Data berhasil dikirim:", response.data);

      setFormData({
        or_id: "",
        or_pd_id: "",
        or_amount: "",
      });
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
    }
  };

  return (
    <div>
      <h2>Form Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Order:</label>
          <input
            type="number"
            name="or_id"
            value={formData.or_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>ID Product:</label>
          <input
            type="text"
            name="or_pd_id"
            value={formData.or_pd_id}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="or_amount"
            value={formData.or_amount}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Simpan Order</button>
      </form>
    </div>
  );
};

export default CreateOrder;
