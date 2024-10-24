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
    <div className="justify-center items-center flex">
      <form
        onSubmit={handleSubmit}
        className="rounded-none mt-20 p-6 w-80 justify-center items-center bg-gray-800"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Category</h2>
        <div className="form-control mb-4">
          <label>ID Category:</label>
          <input
            type="number"
            name="ct_id"
            value={formData.ct_id}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label>Code Category:</label>
          <input
            type="text"
            name="ct_code"
            value={formData.ct_code}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label>Name Category:</label>
          <input
            type="text"
            name="ct_name"
            value={formData.ct_name}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </div>

        <button type="submit" className="btn">Simpan Order</button>
      </form>
    </div>
  );
};

export default CreateCategory;
