import React, { useState } from "react";
import AddCart from "../components/AddCart";
import GroupButton from "../components/GroupButton";
import Wishes from "../components/Wishes";
import "./MyStyle.css";

function Dashboard() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  // active Status Handler
  const handleisActiveStatus = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };

  return (
    <div className="">
      <div className="bg-purple-600 h-[500px] flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-center max-w-md mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex space-x-4">
          <button
            className={`${isActive.available ? "button activee" : "button "}`}
            onClick={() => handleisActiveStatus("available")}
          >
            Cart
          </button>
          <button
            className={`${isActive.available ? "button " : "button  activee"}`}
            onClick={() => handleisActiveStatus("selected")}
          >
            Wishlist{" "}
          </button>
        </div>
      </div>
      <GroupButton></GroupButton>
      {isActive.available ? <AddCart></AddCart> : <Wishes></Wishes>}
    </div>
  );
}

export default Dashboard;
