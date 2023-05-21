import React from "react";

const IconButton = ({ IconComponent, onClick, style }) => {
  return (
    <button className={style} onClick={onClick}>
      {IconComponent}
    </button>
  );
};

export default IconButton;
