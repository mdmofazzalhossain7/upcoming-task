import React from "react";
import { Feed, Leftbar, Rightbar } from "../components";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex w-3/12">
          <Leftbar />
        </div>
        <div className="flex w-6/12">
          <Feed />
        </div>
        <div className="flex w-3/12">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
