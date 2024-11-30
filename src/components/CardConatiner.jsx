import React from "react";
import { Outlet } from "react-router-dom";

const CardConatiner = () => {
  return (
    <div className="w-3/4 px-6">
      <Outlet></Outlet>
    </div>
  );
};

export default CardConatiner;
