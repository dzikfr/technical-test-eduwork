const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <h2 className="text-lg font-bold p-4">Sidebar Menu</h2>
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

export default Sidebar;
