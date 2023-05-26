import React from "react";

const InputField = ({ placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-2 bg-gray-100 w-full rounded-lg`}
      />
    </div>
  );
};

export default InputField;
