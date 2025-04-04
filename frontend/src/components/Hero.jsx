import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto p-4 text-white">
        <div className="mt-20 flex justify-between gap-5">
          <div className="left">
            <h1 className="font-bold text-7xl">Next-Gen</h1>
            <h1 className="title font-bold text-7xl mt-3">Tech Essentials</h1>
            <p className="text-2xl mt-10 lg:w-[500px]">
              Discover the latest in cutting-edge technology. Premium devices
              that elevate your digital lifestyle.
            </p>
            <div className="buttons flex gap-5 mt-20">
              <button className="bg-sky-500 py-3 px-5 rounded-lg hover:bg-blue-800">
                Shop Now {">"}{" "}
              </button>
              <button className="border border-gray-700 py-3 px-5 rounded-lg hover:border-white">
                Explore
              </button>
            </div>
            <div className="customers mt-10 flex gap-5">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Customer"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Customer"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/23.jpg"
                  alt="Customer"
                  className="w-10 h-10 rounded-full border-2 border-black"
                />
              </div>
              <div className="info">
                <h1 className="font-semibold text-white ">
                  2K+ Happy Customers
                </h1>
                <p className="text-gray-600 ">Trusted by tech enthusiasts</p>
              </div>
            </div>
          </div>
          <div className="right w-[400px] h-[600px]   lg:flex hidden overflow-hidden rounded-2xl">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 bg-[#1E1E1E] rounded-xl p-6 border border-gray-800">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">10K+</h3>
            <p className="text-gray-400">Products</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">6+</h3>
            <p className="text-gray-400">Categories</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">15K+</h3>
            <p className="text-gray-400">Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
