import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleProductcard = () => {
  const [products, setProducts] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_PORT}/api/product`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  return (
    <div>
      {/* Card Product */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center px-2">
        {(viewAll ? products : products.slice(0, 4)).map((product) => (
          <div key={product.id} className="card card-compact bg-base-100 w-60 shadow-xl mb-4 rounded-none">

            <figure>
              <img
                src={product.photo}
                alt={product.name}
                className="object-cover w-full h-40"
              />
            </figure>

            <div className="card-body rounded-none">
              <h2 className="card-title text-sm">{product.pd_name}</h2>
              <p className="text-xs">
                {product.description || "Deskripsi tidak tersedia"}
              </p>
              <p className="text-md font-bold">{product.pd_price}</p>

              <div className="card-actions justify-start">
                <button className="btn btn-primary btn-sm rounded-none bg-black text-white">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* "View All" Button */}
      <div className="flex justify-center mb-4">
        <button
          className="btn btn-secondary rounded-none bg-transparent hover:bg-black hover:text-white"
          onClick={toggleView}
        >
          {viewAll ? "Close" : "Expand"}
        </button>
      </div>
      {/* End Button */}
    </div>
  );
};

export default SingleProductcard;
