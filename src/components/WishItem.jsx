import React, { useContext } from "react";
import { CartData } from "../layouts/MainLayout"; // Import Cart context
import { addToCart } from "../utility"; // Import addToCart utility function

const WishItem = ({ item }) => {
  const [items, setItems] = useContext(CartData); // Access the Cart context

  // Handle adding the item to the cart
  const handleAddToCart = (item) => {
    addToCart(item); // Call the addToCart utility function
    setItems((prevItems) => [...prevItems, item]); // Update the Cart context state
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md">
      <div className="flex items-center">
        {/* Display Product Image */}
        <div className="w-20 h-20 bg-gray-400 rounded mr-4">
          <img src={item.product_image} alt={item.product_title} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {item.product_title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="font-bold text-gray-800">Price: ${item.price}</p>

          {/* Add to Cart button */}
          <button
            onClick={() => handleAddToCart(item)} // Add the item to the cart
            className="bg-purple-600 text-white font-bold py-2 my-3 px-4 rounded-full transition-all duration-1000 hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Optional: Remove Item Button */}
      <button
        className="text-red-500 hover:text-red-700 text-2xl"
        aria-label="Remove Item"
      >
        &#10005;
      </button>
    </div>
  );
};

export default WishItem;
