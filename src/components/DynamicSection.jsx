import React from "react";
import CardConatiner from "./CardConatiner";
import Categorys from "./Categorys";

const DynamicSection = ({ categories }) => {
  return (
    <div>
      <h1 className="text-center py-8 font-bold text-3xl">
        {" "}
        Explore Cutting-Edge Gadgets
      </h1>
      {/*Category sidebar */}
      <div className="w-11/12 flex mx-auto flex-col lg:flex-row">
        <Categorys categories={categories}></Categorys>

        <CardConatiner></CardConatiner>
      </div>
    </div>
  );
};

export default DynamicSection;
