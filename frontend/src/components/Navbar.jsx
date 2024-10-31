import React from "react";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ThemeController/>
      </div>
      <div className="navbar-end">
        <Link to={"/"} className="btn">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
