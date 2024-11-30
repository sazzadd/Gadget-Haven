import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWish } from "../utility";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data);
  const [gadget, setGadget] = useState([]);
  useEffect(() => {
    const singlaDate = data.find((gadget) => gadget.id == parseInt(id));
    setGadget(singlaDate);
  }, [data, id]);

  const { product_title, price, product_image, specification, rating } = gadget;
  // handle add to cart
  const handleAddCart = (gadget) => {
    addToCart(gadget);
    // getAllCart();
  };
  // handle to wish
  const handleWish = (a) => {
    addToWish(a);
    // getAllwishes();
  };
  // const { id } = useParams();
  // const data = useLoaderData();
  // const [gadget, setGadget] = useState([]);

  // useEffect(() => {
  //   const singleData = data.find((gadget) => gadget.id === parseInt(id));
  //   setGadget(singleData);
  // }, [data, id]);

  // const { product_title, price, product_image, specification, rating } = gadget;

  // const handleAddCart = () => {
  //   addToCart(gadget, updateCartCount);
  // };

  // const handleWish = (gadget) => {
  //   addToWish(gadget);
  // };

  return (
    <div className="flex flex-col items-center bg-gray-100 mt-[74px]">
      {/* Header Section */}
      <div className="bg-purple-600 h-[463px] w-full py-12 text-center">
        <h1 className="text-3xl font-semibold text-white">Product Details</h1>
        <p className="text-white mt-2 max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Card Section */}
      <div className="bg-white -mt-[245px] rounded-lg shadow-lg p-8 mt-8 max-w-3xl w-full  mx-4">
        <div className="flex flex-col md:flex-row">
          {/* Placeholder for Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center bg-gray-200 rounded-lg p-8">
            <div className="h-48 w-48 bg-gray-300 rounded">
              <img src={product_image} alt={product_title} />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {product_title}
            </h2>
            <p className="text-green-600 font-medium mt-2">
              <span style={{ color: gadget.availability ? "#28a745" : "red" }}>
                {gadget.availability ? "In stock" : "Not available"}
              </span>
            </p>
            <p className="text-xl font-semibold text-gray-800 mt-2">
              Price: ${price}
            </p>
            <p className="text-gray-600 mt-4"></p>

            {/* Specifications */}
            <h3 className="text-lg font-semibold text-gray-800 mt-6">
              Specification:
            </h3>
            <ul className="list-decimal list-inside text-gray-600 mt-2 space-y-1">
              <li>Intel i7 11th Gen</li>
              {specification && Array.isArray(specification) && (
                <ul>
                  {specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </ul>

            {/* Rating Section */}
            <div className="flex items-center mt-6">
              <span className="text-lg font-semibold text-gray-800">
                Rating
              </span>
              <div className="flex items-center ml-2 text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-gray-600 ml-2 text-lg">{rating}</span>
            </div>

            {/* Buttons */}

            <div className="flex mt-6 space-x-4">
              {/* add to cart */}
              <button
                onClick={() => handleAddCart(gadget)}
                className="flex items-center justify-center px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300"
              >
                Add To Cart
                <svg
                  className="h-5 w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0 2h10v-2H7v2zm-4.8-4.2l1.4-7.4h15.3l1.5 7.4H2.2zm14.8-8H7.8l-1.1 6h13.5l-1.5-6zm3.6-2H6L5 4H1V2h5.3l1.3 3h13.4l-1.5 7h3v2h-3.3l-1.5-7z" />
                </svg>
              </button>
              {/* wish button */}
              <button
                onClick={() => handleWish(gadget)}
                className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-100 transition duration-300"
              >
                wish
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
