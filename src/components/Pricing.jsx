import React from "react";
import Button from "./Button";
import Content from "./Content";
import ListTile from "./ListTile";
import Title from "./Title";

//price data
const pricing = [
  {
    type: "Starter",
    descripiton: "Best option for personal use & for your next project.",
    price: 29,
    oppurtunities: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
  },
  {
    type: "Company",
    descripiton: "Relevant for multiple users, extended & premium support.",
    price: 99,
    oppurtunities: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 10 developer",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
  },
  {
    type: "Starter",
    descripiton: "Best option for personal use & for your next project.",
    price: 499,
    oppurtunities: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 100+ developer",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
  },
];

//tick icon
const Tick = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

//price box component
const PriceBox = ({ title, price, description, facilities }) => {
  const listTiles = facilities.map((facility, index) => (
    <ListTile key={index} title={facility} icon={<Tick />} />
  ));

  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {listTiles}
      </ul>
      <Button title={"Get Started"} />
    </div>
  );
};

//originial pricing section
const Pricing = () => {
  const priceBox = pricing.map((price, index) => {
    return (
      <PriceBox
        key={index}
        title={price.type}
        description={price.descripiton}
        price={price.price}
        facilities={price.oppurtunities}
      />
    );
  });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <Title title={"Designed for business teams like yours"} />
          <Content
            children={
              "Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
            }
            isCenter={true}
          />
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {priceBox}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
