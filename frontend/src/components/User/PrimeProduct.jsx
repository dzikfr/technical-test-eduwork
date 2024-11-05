import React from "react";
import SamsungS24 from "../../../public/assets/samsungs24.png";

const PrimeProduct = () => {
  return (
    <div className="my-20">
      <div className="hero bg-base-200 min-h-screen mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={SamsungS24}
            className="max-w-sm w-[40%] rounded-lg"
          />
          <div className="mr-20 pl-6">
            <h1 className="text-5xl font-bold">New Generation <br/> Smartphone with AI</h1>
            <p className="py-6">
              Smartphone Galaxy S24 Ultra is a powerful smartphone which is equipped with AI 
              that makes thing easier. Stay tuned for official announcements and review for 
              more details.
            </p>
            <button className="btn btn-primary rounded-none bg-black text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeProduct;
