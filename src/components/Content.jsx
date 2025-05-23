import React from "react";

const Content = ({ children, isCenter = false }) => {
  const style = `max-w-2xl ${
    isCenter ? "text-center" : "text-start"
  } m-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400`;
  return <p className={style}>{children}</p>;
};
export default Content;
