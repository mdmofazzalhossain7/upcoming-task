import React from "react";
import { Feed, Leftbar, Rightbar, TopAd } from "../components";

const Home = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex">
        <div className=" hidden sm:flex sm:w-3/12">
          <Leftbar />
        </div>
        <div className="flex sm:w-6/12 w-full h-full flex-col">
          <TopAd />
          <Feed />
        </div>
        <div className="hidden sm:flex sm:w-3/12">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
