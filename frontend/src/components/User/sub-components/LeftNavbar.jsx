import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const LeftNavbar = () => {
  return (
    <div className="flex-1">

    {/* Burger Button */}
    <div className="lg:hidden">
      <label htmlFor="my-drawer" className="btn btn-ghost text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </label>
    </div>

    {/* Brand Name */}
    <a className="btn btn-ghost text-xl lg:flex lg:items-center">
      ApalahShop
    </a>

    {/* Menu for bigger window */}
    <div className="flex-none hidden lg:block z-50">
      <ul className="menu menu-horizontal px-1">

        <li>
          <details>
            <summary>Categories</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Laptop</a></li>
                <li><a>Camera</a></li>
                <li><a>Tablet</a></li>
                <li><a>Headphone</a></li>
                <li><a>Smartwatch</a></li>
                <li><a>Console</a></li>
              </ul>
          </details>
        </li>
          
        <li>
          <details>
            <summary>Shop</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Simple</a></li>
                <li><a>Variable</a></li>
                <li><a>Grouped</a></li>
                <li><a>Image</a></li>
              </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Pages</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Blog</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Main</a></li>
                <li><a>Column</a></li>
                <li><a>Grid</a></li>
                <li><a>Basic</a></li>
              </ul>
          </details>
        </li>
      </ul>
    </div>

  </div>
  )
}

export default LeftNavbar
