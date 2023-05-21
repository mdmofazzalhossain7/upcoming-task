import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoCreate, IoCreateOutline } from "react-icons/io5";
import { HiMegaphone, HiOutlineMegaphone } from "react-icons/hi2";
import {
  MdAssignmentInd,
  MdAssignment,
  MdOutlineAssignment,
} from "react-icons/md";

import Avatar from "./Avatar";
import NavIcon from "./NavIcon";

const Topbar = () => {
  return (
    <div className="border-b-2 border-b-blue-100 hidden sm:block">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        <div className="flex w-3/12 justify-center items-center px-2">
          <MdAssignmentInd className="text-4xl text-blue-900" />
          <p className="text-xl font-semibold ml-2 text-blue-900 hidden lg:inline-block">
            Upcoming Task
          </p>
        </div>
        <div className="flex w-6/12 justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
          <NavIcon
            path="/"
            IconComponent={<AiOutlineHome />}
            activeIcon={<AiFillHome />}
          />
          <NavIcon
            path="/create"
            IconComponent={<IoCreateOutline />}
            activeIcon={<IoCreate />}
          />
          <NavIcon
            path="/announcements"
            IconComponent={<HiOutlineMegaphone />}
            activeIcon={<HiMegaphone />}
          />
          <NavIcon
            path="/tasks"
            IconComponent={<MdOutlineAssignment />}
            activeIcon={<MdAssignment />}
          />
        </div>
        <div className="flex w-3/12 justify-center">
          <Avatar path="/profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
