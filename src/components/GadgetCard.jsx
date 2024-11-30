import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCard = () => {
  const data = useLoaderData();
  //   console.log(data);
  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
      {gadgets.map((gadget) => (
        <Card key={gadget.id} gadget={gadget} />
      ))}
    </div>
  );
};

export default GadgetCard;
