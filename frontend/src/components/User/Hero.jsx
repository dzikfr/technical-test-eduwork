import React from "react";
import ps5 from "../assets/ps5.png";
import controller from "../assets/controller.png"
import vr2 from "../assets/vr2.png"

const Hero = () => {
  return (
    <div className="hero bg-base flex-col lg:flex-row py-20 pt-10">
      <div className="flex w-full h-full px-0 lg:px-10">
        {/* Left Hero */}
        <div className="card grid h-full py-20 bg-gray-200 place-items-center basis-3/5 rounded-none border-2 border-zinc-950">
          <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={ps5} className="max-w-sm w-[50%] rounded-lg " />
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Purchase Limitless <br />
                  Game Console
                </h1>
                <p className="py-6">
                  Explore your game experience to be more realistic with All
                  Brand New Playstation 5
                </p>
                <button className="btn btn-primary rounded-none bg-black text-white">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Left Hero */}

        <div className="divider-horizontal"></div>

        {/* Right Hero */}
        <div className="flex flex-col basis-2/5 h-full">

          {/* Hero Top Right */}
          <div className="card grid h-full place-items-center basis-1/2 rounded-none bg-gradient-to-r from-gray-400 to-gray-300">
            <div className="hero">
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md flex flex-col justify-center items-center">
                <img src={controller} className="max-w-sm w-[30%] rounded-lg " />
                  <p className="my-3 text-black font-bold">
                    Sony DualSense Wireless Controller
                  </p>
                  <button className="btn btn-primary rounded-none bg-black text-white">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Top Right */}

          <div className="divider-vertical"></div>

          {/* Hero Bottom Right */}
          <div className="card grid h-full place-items-center basis-1/2 rounded-none bg-gradient-to-r from-gray-400 to-gray-300">
            <div className="hero">
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md flex flex-col justify-center items-center">
                <img src={vr2} className="max-w-sm w-[50%] rounded-lg " />
                  <p className="my-3 text-black font-bold">
                    Sony DualSense Wireless Controller
                  </p>
                  <button className="btn btn-primary rounded-none bg-black text-white">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Bottom Right */}

        </div>
        {/* End Right Hero */}

      </div>
    </div>
  );
};

export default Hero;
