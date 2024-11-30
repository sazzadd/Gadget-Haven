import React from "react";
import { useLoaderData } from "react-router-dom";
import DynamicSection from "../components/DynamicSection";
import BannerHeading from "./BannerHeading";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return (
    <div className="">
      {/* <h1 className=" text-2xl font-semibold">Home Page</h1> */}
      {/* banner heading */}
      <BannerHeading></BannerHeading>
      {/* dynamic aria */}
      <DynamicSection categories={categories}></DynamicSection>
    </div>
  );
};

export default Home;
