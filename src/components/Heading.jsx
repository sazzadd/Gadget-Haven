import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="banner-heading mt-[0.3%]  bg-purple-600 mx-auto w-11/12 h-[450px] border-gary-300 rounded-2xl border-4">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-purple-600">
          <div className="text-center bg-transparent mt-[70px] p-10  ">
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-lg text-white mb-8">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
