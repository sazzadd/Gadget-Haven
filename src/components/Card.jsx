import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_title, price, product_image, id } = gadget;

  return (
    <div>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="bg-white rounded h-48 p-5">
          {/* Replace with your actual image */}
          <img
            src={product_image}
            alt={product_title}
            className="h-full rounded-2xl w-full  h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{product_title}</h2>
          <p className="text-gray-700 mb-6">Price: {price}k</p>
          <NavLink
            to={`/gadget/${id}`}
            className=" btn-outline border transition duration-1000 ease-in-out border-purple-700   hover:bg-purple-700 hover:text-white font-bold py-2 mt-2 px-4 rounded-full mt-4"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
