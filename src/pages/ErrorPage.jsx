// src/pages/ErrorPage.jsx
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Import an icon from React Icons
import { Link } from "react-router-dom"; // Import Link for navigation

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <FaExclamationTriangle className="text-6xl text-red-600 mb-4" />
      <h1 className="text-4xl font-bold text-[#9538E2]">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#9538E2] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
