import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCategory = () => {
  const [ctid, setCtid] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/category/${id}`)
      .then((response) => {
        const category = response.data.data;
        setCtid(category.ct_id);
        setCode(category.ct_code);
        setName(category.ct_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCategory = {
      ct_id: ctid,
      ct_code: code,
      ct_name: name,
    };

    axios
      .put(`http://localhost:3000/api/category/${id}`, updatedCategory)
      .then(() => {
        navigate("/admin/category");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="justify-center items-center flex">
      <form
        onSubmit={handleSubmit}
        className="rounded-none mt-20 p-6 w-80 justify-center items-center bg-gray-800"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Edit Category
        </h2>
        <div className="form-control mb-4">
          <label>ID Category:</label>
          <input
            type="text"
            value={ctid}
            onChange={(e) => setCtid(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Kode Category:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Nama Category:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <button
            type="submit"
            className="btn"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
