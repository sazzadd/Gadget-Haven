import { createContext, default as React, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getAllCart, getAllWishes } from "../utility";

export const CartData = createContext([]);
export const WishData = createContext([]);

const MainLayout = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const [wishesdata, setWishesdata] = useState([]);

  useEffect(() => {
    const carts = getAllWishes();
    setWishesdata(carts);
  });

  useEffect(() => {
    const carts = getAllCart();
    setItems(carts);
  });

  useEffect(() => {
    // Set the document title based on the current route
    const titleMap = {
      "/": "Home - Gadget Heaven",
      "/statistics": "Statistics|| Gadget Heaven",
      "/dashboard": "Dashboard||Gadget Heaven",
      "/faq": "FAQ||Gadget Heaven",
      "/gadget/:id": "Gadget Details||Gadget Heaven",
    };

    const currentPath = location.pathname;
    const title = titleMap[currentPath] || "Gadget Heaven"; // Default title

    document.title = title;
  }, [location]);

  return (
    <div>
      <WishData.Provider value={[wishesdata, setWishesdata]}>
        <CartData.Provider value={[items, setItems]}>
          <ToastContainer />
          <div>
            <div className="w-11/12 mx-auto">
              <Navbar />
            </div>
            <div>
              <Outlet />
            </div>
            <Footer />
          </div>
        </CartData.Provider>
      </WishData.Provider>
    </div>
  );
};

export default MainLayout;
