import React from "react";

const Title = ({ title, isCentre = true }) => {
  const style = `mb-4 ${
    isCentre ? "text-center" : "text-start"
  } text-3xl font-extrabold tracking-tight  text-gray-900 lg:mb-8 lg:text-3xl dark:text-white`;
  return <h2 className={style}>{title}</h2>;
};
export default Title;
