import React from "react";

const ListTile = ({ icon, title }) => {
  return (
    <li className="flex space-x-3">
      {icon}
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
        {title}
      </span>
    </li>
  );
};
export default ListTile;
