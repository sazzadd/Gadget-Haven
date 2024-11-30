import React from "react";

const CartItem = ({ item }) => {
  return (
    <div>
      <div className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-300 rounded mr-4">
            <img src={item.product_image} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.product_title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="font-bold text-gray-800">Price: ${item.price}</p>
          </div>
        </div>
        <button
          className="text-red-500 hover:text-red-700 text-2xl"
          aria-label="Remove Item"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
