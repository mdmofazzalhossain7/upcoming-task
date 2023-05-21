import React from "react";

const Button = ({ title, IconComponent, style }) => {
  return (
    <button
      className={`flex w-full justify-center items-center  px-6 py-2 text-sm rounded-lg text-white  active:bg-gray-800 shadow-md ${style}`}
    >
      {IconComponent && <div>{IconComponent}</div>}
      <p className=" uppercase ml-2">{title}</p>
    </button>
  );
};

export default Button;
