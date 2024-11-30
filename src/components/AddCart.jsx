// import React, { useEffect, useState } from "react";
// import { getAllCart } from "../utility";
import { useContext } from "react";
import { CartData } from "../layouts/MainLayout";
import CartItem from "./CartItem";

const AddCart = () => {
  const [items, setItems] = useContext(CartData);
  // useEffect(() => {
  //   const carts = getAllCart();
  //   setItems(carts);
  // }, []);

  console.log(items);
  return (
    <div className="w-7/12 mx-auto">
      <div className="flex justify-start">
        <h1 className="font-bold text-2xl my-2">Cart</h1>
      </div>
      {items.map((item) => (
        <CartItem item={item}></CartItem>
      ))}
    </div>
  );
};

export default AddCart;
