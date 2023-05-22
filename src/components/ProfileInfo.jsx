import React from "react";

const ProfileInfo = ({ label, value }) => {
  return (
    <div className="flex ml-6 text-xs text-slate-600 font-semibold">
      <p className="w-3/12">{label}</p>
      <p>:</p>
      <p className="ml-4 text-slate-800 w-8/12 overflow-hidden overflow-ellipsis">
        {value}
      </p>
    </div>
  );
};

export default ProfileInfo;
