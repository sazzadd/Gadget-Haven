import React, { useEffect, useState } from "react";
import { getAllWishes } from "../utility";
import WishItem from "./WishItem";

const Wishes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const carts = getAllWishes();
    setItems(carts);
  }, []);

  //

  return (
    <div className="w-7/12 mx-auto">
      <h1 className="font-bold text-2xl my-2">Wishes List</h1>
      {items.map((item) => (
        <WishItem item={item}></WishItem>
      ))}
    </div>
  );
};

export default Wishes;
