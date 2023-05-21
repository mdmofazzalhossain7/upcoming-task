import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import {
  MdModeEditOutline,
  MdBloodtype,
  MdOutlineLocationCity,
} from "react-icons/md";
import { TiTick } from "react-icons/ti";

import { AvatarWithBadge, Button } from "../components";

const dp =
  "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=";

const Profile = () => {
  return (
    <div className="relative">
      <div className="flex flex-row-reverse justify-start px-2">
        <div className="px-3">
          <img
            src={dp}
            alt="profile"
            className="h-28 w-28 rounded-full object-cover"
          />
        </div>
        <div>
          <p>Md Mofazzal Hossain</p>
          <p>This is a test bio</p>
          <div>
            <div>
              <p>A+</p>
            </div>
            <div>
              <p>Dhaka</p>
            </div>
          </div>
        </div>
      </div>
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
