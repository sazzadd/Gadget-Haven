import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gary-900 mx-auto w-11/12">
      <div className="mb-6 md:mb-0 flex justify-center py-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Gadget Heaven</h2>
          <p className="text-gray-400 text-center">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
      </div>

      <hr />
      <div className="container mx-auto py-8 px-4">
        <div
          className="flex 
flex-col md:flex-row justify-between"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>{" "}
               
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
         
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; 2023 Gadget Heaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
