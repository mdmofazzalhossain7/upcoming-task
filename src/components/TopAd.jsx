import React from "react";

const adImg =
  "https://static-prod.adweek.com/wp-content/uploads/2019/12/hulu-cheez-it-ad-CONTENT-2019.jpg";

const TopAd = () => {
  return (
    <div className="absolute top-0 w-full h-[120px] shadow-md sm:hidden">
      <img src={adImg} alt="advertise" className="w-full h-full object-cover" />
    </div>
  );
};

export default TopAd;
