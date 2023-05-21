import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const imgUrl =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

const AvatarWithBadge = ({ style }) => {
  const [verified, setVerified] = useState(true);

  return (
    <div className="relative">
      <img
        src={imgUrl}
        alt="avatar"
        className={`h-14 w-14 rounded-full object-cover ${style}`}
      />
      {verified && (
        <TiTick className="absolute bottom-1 left-9 text-xs text-white bg-blue-400 rounded-full" />
      )}
    </div>
  );
};

export default AvatarWithBadge;
