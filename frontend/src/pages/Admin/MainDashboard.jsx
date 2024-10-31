import React, { useState } from "react";
import ReadProduct from "../../components/Admin/ReadProduct";
import Navbar from "../../components/Navbar";
import ReadCategory from "../../components/Admin/ReadCategory";
import ReadOrder from "../../components/Admin/ReadOrder";
import ReadUser from "../../components/Admin/ReadUser";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="w-32 h-screen border-r border-gray-700">
      <ul>
        <li
          onClick={() => setActiveComponent("product")}
          className="p-4 hover:bg-gray-700 cursor-pointer"
        >
          Product
        </li>
        <li
          onClick={() => setActiveComponent("category")}
          className="p-4 hover:bg-gray-700 cursor-pointer"
        >
          Category
        </li>
        <li
          onClick={() => setActiveComponent("order")}
          className="p-4 hover:bg-gray-700 cursor-pointer"
        >
          Order
        </li>
        <li
          onClick={() => setActiveComponent("user")}
          className="p-4 hover:bg-gray-700 cursor-pointer"
        >
          User
        </li>
      </ul>
    </div>
  );
};

const MainContent = ({ activeComponent }) => {
  switch (activeComponent) {
    case "product":
      return <ReadProduct />;
    case "category":
      return <ReadCategory/>;
    case "order":
      return <ReadOrder/>;
    case "user":
      return <ReadUser/>;
    default:
      return <div className="p-4">Select a menu</div>;
  }
};

const MainDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="flex-1">
          <MainContent activeComponent={activeComponent} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
