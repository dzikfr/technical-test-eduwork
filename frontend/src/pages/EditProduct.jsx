import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams(); // Assuming you're passing the product ID via URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pd_id: '',
    pd_code: '',
    pd_ct_id: '',
    pd_name: '',
    pd_price: ''
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories and product details on component mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/product/${id}`);
        const result = await response.json();
        setFormData({
          pd_id: result.data.pd_id,
          pd_code: result.data.pd_code,
          pd_ct_id: result.data.pd_ct_id._id, // Assuming the product has category populated
          pd_name: result.data.pd_name,
          pd_price: result.data.pd_price
        });
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        const result = await response.json();
        setCategories(result.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchProduct();
    fetchCategories();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/products');
      } else {
        console.error('Failed to update product:', await response.text());
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID Produk:</label>
        <input
          type="number"
          name="pd_id"
          value={formData.pd_id}
          onChange={handleChange}
          disabled
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
        <label>Kategori Produk:</label>
        <select
          name="pd_ct_id"
          value={formData.pd_ct_id}
          onChange={handleChange}
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

      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
