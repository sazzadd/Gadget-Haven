import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { CartData, WishData } from "../layouts/MainLayout";

const Navbar = () => {
  const location = useLocation();
  const [items, setItems] = useContext(CartData);
  const [wishesdata, setWishesdata] = useContext(WishData);

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "bg-slate-400";
      case "/statistics":
        return "bg-white ";
      case "/":
      case "/home":
        return "bg-transparent";
      default:
        return "bg-white";
    }
  };

  return (
    <div className=" ">
      <div
        className={`navbar fixed border rounded-lg top-0 z-50 bg-transparent w-11/12 mx-auto ${getBackgroundColor()}`}
      >
        <div className="navbar-start">
          <div className="dropdown lg:ml-[10%]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="text-base font-medium mr-[40px]" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-base font-medium mr-[40px]"
                  to="/statistics"
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-base font-medium mr-[40px]"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="text-base font-medium" to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className="text-base font-medium mr-[40px]" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-base font-medium mr-[40px]"
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-base font-medium mr-[40px]"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base font-medium" to="/faq">
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="relative h-[40px] w-[40px] cursor-pointer mr-3 bg-white flex justify-center items-center rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition duration-200 ease-in-out">
            <span className="text-gray-700 text-xl">
              <BsCart3 />
            </span>
            <span className="absolute -top-1 -right-1 h-[20px] w-[20px] bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {items.length}
            </span>
          </div>

          <div className="relative h-[40px] w-[40px] cursor-pointer bg-white flex justify-center items-center rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 transition duration-200 ease-in-out">
            <span className="text-gray-700 text-xl">
              <FaRegHeart />
            </span>
            <span className="absolute -top-1 -right-1 h-[20px] w-[20px] bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {wishesdata.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;