import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { Button } from "../components";

const Profile = () => {
  return (
    <div className="relative">
      Profile
      <div className="fixed right-0 left-0 bottom-[60px] mx-5">
        <Button
          title="Log Out"
          path="/log-in"
          style={"text-white bg-red-500 hover:bg-red-600 active:bg-red-400"}
          IconComponent={<AiOutlineLogout />}
        />
      </div>
    </div>
  );
};

export default Profile;
