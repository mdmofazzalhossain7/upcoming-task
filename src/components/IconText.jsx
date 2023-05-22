import React from "react";

const IconText = ({ IconComponent, title }) => {
  return (
    <div className="flex items-center text-slate-600 text-xs cursor-default">
      <div>{IconComponent && IconComponent}</div>
      <h1 className="ml-2  font-semibold uppercase">{title}</h1>
    </div>
  );
};

export default IconText;
