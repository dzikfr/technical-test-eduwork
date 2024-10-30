import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const RightNavbar = () => {
  return (
    <div className="flex-none gap-2">

    {/* Profile Button */}
    <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar">
          <a className="btn btn-ghost text-xl lg:flex lg:items-center" ><CgProfile /></a>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a className="justify-between">Profile<span className="badge">New</span></a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
    </div>
    {/* End Profile Button */}

      {/* Cart Button */}
      <a href="/cart" className="btn btn-ghost text-xl lg:flex lg:items-center" ><IoCartOutline /></a>

      {/* Search Product Input */}
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto rounded-none"
        />
      </div>
      {/* End Search Product Input */}

    </div>
  )
}

export default RightNavbar
