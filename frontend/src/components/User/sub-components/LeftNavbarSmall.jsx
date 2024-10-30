import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const LeftNavbarSmall = () => {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side h-full z-50">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 bg-base-100 min-h-screen">

            <ul>
              <b>Categories</b>
              <ul>
                <li><a>Laptop</a></li>
                <li><a>Camera</a></li>
                <li><a>Tablet</a></li>
                <li><a>Headphone</a></li>
                <li><a>Smartwatch</a></li>
                <li><a>Console</a></li>
              </ul>
            </ul>

            <ul>
              <b>Shop</b>
              <ul>
                <li><a>Simple</a></li>
                <li><a>Variable</a></li>
                <li><a>Grouped</a></li>
                <li><a>Image</a></li>
              </ul>
            </ul>
            
            <ul>
              <b>Pages</b>
              <ul>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </ul>

            <ul>
              <b>Blog</b>
              <ul>
                <li><a>Main</a></li>
                <li><a>Column</a></li>
                <li><a>Grid</a></li>
                <li><a>Basic</a></li>
              </ul>
            </ul>
          </ul>
        </div>
    </div>
  )
}

export default LeftNavbarSmall
