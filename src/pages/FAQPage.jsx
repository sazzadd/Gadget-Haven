import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import Heading from "../components/Heading";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is GadgetHeaven?",
      answer:
        "GadgetHeaven is an e-commerce platform designed to help you discover and purchase the latest and greatest gadgets across multiple categories like computers, phones, smartwatches, chargers, and power banks.",
    },
    {
      question: "How can I navigate through the website?",
      answer:
        "Our navigation bar includes links to the Home page, Dashboard, Stats, and more. The navbar highlights the active page for ease of use, and a sidebar on the Home page displays gadget categories.",
    },
    {
      question: "How do I view product details?",
      answer:
        "Each product card has a 'Details' button that takes you to the product’s dedicated page. This page displays detailed information such as the price, specifications, availability, and rating.",
    },
    {
      question: "How does the shopping cart work?",
      answer:
        "You can add items to the cart by clicking the cart icon on a product’s detail page. A badge in the navbar shows the total number of items in the cart, and you can view and manage your cart from the Dashboard’s 'Cart' tab.",
    },
    {
      question: "What is the Wishlist feature?",
      answer:
        "The Wishlist allows you to save items by clicking the heart icon on product details. Items can only be added once to the wishlist and can be moved to the cart later.",
    },
    {
      question: "Can I sort items in my cart?",
      answer:
        "Yes! The 'Sort by Price' button in the Cart tab allows you to arrange items from most to least expensive.",
    },
    {
      question: "Is the site responsive?",
      answer:
        "Absolutely! GadgetHeaven is designed to provide an optimal viewing experience on all devices, whether you’re on a desktop, tablet, or smartphone.",
    },
  ];

  return (
    <div className="bg-gray-100  py-10">
      <Heading
        title={`GadgetHeaven✨ FAQ`}
        subtitle={`Your questions, answered. Everything you need to know about
            Gadget-Heaven!`}
      ></Heading>

      <div className="max-w-4xl -mt-[10%] mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            GadgetHeaven✨ FAQ
          </h1>
          <p className="text-gray-500">
            Your questions, answered. Everything you need to know about
            GadgetHeaven!
          </p>
        </div> */}

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-2 text-lg text-gray-700 font-medium">
                  <FaQuestionCircle className="text-[#9538E2]" />
                  {faq.question}
                </div>
                <div className="text-gray-500">
                  {openIndex === index ? <BsChevronUp /> : <BsChevronDown />}
                </div>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
