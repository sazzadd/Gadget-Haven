import React, { useContext, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RiSortDesc } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CartData } from "../layouts/MainLayout";

const GroupButton = () => {
  const [items, setItems] = useContext(CartData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Sort in descending order of price
  const sortByPriceDescending = () => {
    const sortedItems = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedItems);
    localStorage.setItem("carts", JSON.stringify(sortedItems));
  };

  const handlePurchase = () => {
    setIsModalOpen(true); // Show the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setItems([]); // Clear cart when closing modal
    localStorage.removeItem("carts");
    navigate("/"); // Redirect to home
  };

  // Calculate total cost based on current items in cart
  const totalCost = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div className="flex justify-end py-8 w-10/12 mx-auto">
        <div className="text-gray-700 mr-12 font-bold text-2xl">
          Total cost: ${totalCost.toFixed(2)}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={sortByPriceDescending}
            className="bg-purple-500 flex hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Sort by Price <RiSortDesc />
          </button>
          <button
            onClick={handlePurchase}
            disabled={totalCost === 0} // Disable if cart is empty or total price is 0
            className="bg-purple-500 flex hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full disabled:bg-gray-400"
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open flex items-center justify-center">
          <div className="modal-box relative max-w-lg p-8 shadow-lg rounded-lg bg-white text-center">
            <FiCheckCircle className="text-green-500 text-6xl mb-4 mx-auto animate-bounce" />
            <h2 className="text-3xl font-bold text-gray-800">
              Congratulations!
            </h2>
            <p className="text-gray-600 mt-4">
              Your purchase was successful! Enjoy your new gadget.
            </p>
            <div className="text-gray-700 text-2xl font-bold mt-4">
              Total Cost: ${totalCost.toFixed(2)}{" "}
              {/* Display total cost in the modal */}
            </div>
            <div className="modal-action flex justify-center mt-8">
              <button
                onClick={handleModalClose}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupButton;
