import React from "react";
import { NavLink } from "react-router-dom";

const Categorys = ({ categories }) => {
  return (
    <div className="sidebar w-1/4 border border-gray-200 flex rounded-3xl flex-col items-center">
      <div className="py-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-8 mb-4 py-4 rounded-full border block w-full ${
              isActive
                ? "bg-[#9538E2] text-white"
                : "bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white"
            }`
          }
        >
          ALL Product
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category}`}
            key={category.category}
            className={({ isActive }) =>
              `px-8 mb-4 py-4 rounded-full text-center border block w-full ${
                isActive
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#09080F0D] hover:bg-[#9538E2] hover:text-white"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
