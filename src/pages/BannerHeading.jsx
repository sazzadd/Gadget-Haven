import React from "react";
import { NavLink } from "react-router-dom";

const BannerHeading = () => {
  return (
    <div>
      <div className="banner-heading mt-[0.3%]  bg-purple-600 mx-auto w-11/12 h-[694px] border-gary-300 rounded-2xl border-4">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-purple-600">
          <div className="text-center bg-transparent mt-[70px] p-10  ">
            <h1 className="text-4xl font-bold text-white mb-4">
              Upgrade Your Tech Accessorize with<br></br> Gadget Heaven
              Accessories
            </h1>
            <p className="text-lg text-white mb-8">
              Explore the latest gadgets that will take your experience to
              <br></br> the next level. From smart devices to the coolest
              accessories, we have it all.
            </p>
            <NavLink
              to="/dashboard"
              className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-[20%] ">
        <img
          src="https://i.ibb.co.com/9V1p07Y/Rectangle-1-2.png"
          className="border-8 border-[#9093944d] rounded-2xl h-[563px]"
          alt="something"
        />
      </div>
    </div>
  );
};

export default BannerHeading;
