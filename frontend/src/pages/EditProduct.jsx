import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const [pdid, setPdid] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]); // Untuk menyimpan daftar kategori

  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil id dari parameter URL

  // Fetch detail produk
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/${id}`)
      .then((response) => {
        const product = response.data.data;
        setPdid(product.pd_id);
        setCode(product.pd_code);
        setCategory(product.pd_ct_id._id); // Set category ke ObjectId
        setName(product.pd_name);
        setPrice(product.pd_price);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch categories untuk dropdown
    axios
      .get("http://localhost:3000/api/category")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      pd_id: pdid,
      pd_code: code,
      pd_ct_id: category, // Kirim category sebagai ObjectId
      pd_name: name,
      pd_price: price,
    };

    axios
      .put(`http://localhost:3000/api/product/${id}`, updatedProduct)
      .then(() => {
        navigate("/admin/product"); // Redirect ke halaman produk setelah berhasil edit
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
        <h2  className="text-xl font-bold mb-4 text-center">Edit Product</h2>
        <div className="form-control mb-4">
          <label>ID Produk:</label>
          <input
            type="text"
            value={pdid}
            onChange={(e) => setPdid(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Kode Produk:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Kategori Produk:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input input-bordered"
            required
          >
            <option value="">Pilih Kategori</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.ct_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control mb-4">
          <label>Nama Produk:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label>Harga Produk:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div>
          <button type="submit" className="btn">Simpan</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
