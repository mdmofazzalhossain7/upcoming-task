import React from "react";
import { Post, TopAd } from "../components";

const Announcements = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 ">
        <TopAd />
      </div>
      <div className="pt-[120px] mb-14 overflow-y-scroll ">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Announcements;
