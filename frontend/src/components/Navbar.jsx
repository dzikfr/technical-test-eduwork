import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
      <ul>
        <li onClick={() => navigate('/admin/order')}>Order</li>
        <li onClick={() => navigate('/admin/product')}>Product</li>
        <li onClick={() => navigate('/admin/category')}>Category</li>
        <li onClick={() => navigate('/admin/user')}>User</li>
      </ul>
    </div>
  )
}

export default Navbar
