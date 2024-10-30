import React from "react";
import LeftNavbar from "./sub-components/LeftNavbar";
import LeftNavbarSmall from "./sub-components/LeftNavbarSmall";
import RightNavbar from "./sub-components/RightNavbar";

const Navbar = () => {
  return (
    <div className="pr-8 pl-4">
      <div className="navbar bg-base-100">

        {/* Left Navbar */}
        <LeftNavbar/>
        {/* Drawer for small window */}
        <LeftNavbarSmall/>
        {/* End Left Navbar */}


        {/* Right navbar */}
        <RightNavbar/>
        {/* End Right Navbar */}

      </div>
    </div>
  );
};

export default Navbar;
