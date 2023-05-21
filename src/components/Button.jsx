import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ title, IconComponent, style, path }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`flex w-full justify-center items-center  px-6 py-2 text-sm rounded-lg text-white  active:bg-gray-800 shadow-md ${style}`}
      onClick={() => navigate(path)}
    >
      {IconComponent && <div>{IconComponent}</div>}
      <p className=" uppercase ml-2">{title}</p>
    </button>
  );
};

export default Button;
