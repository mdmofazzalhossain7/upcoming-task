import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoAddCircleOutline, IoAddCircle } from "react-icons/io5";
import { HiMegaphone, HiOutlineMegaphone } from "react-icons/hi2";
import { MdAssignment, MdOutlineAssignment } from "react-icons/md";

import NavIcon from "./NavIcon";
import Avatar from "./Avatar";

const Navbar = () => {
  return (
    <div className="fixed bottom-[-4px] left-0 right-0 sm:hidden">
      <div className="flex items-center justify-between w-full gap-x-2 px-4">
        <NavIcon
          path="/"
          IconComponent={<AiOutlineHome />}
          activeIcon={<AiFillHome />}
        />
        <NavIcon
          path="/announcements"
          IconComponent={<HiOutlineMegaphone />}
          activeIcon={<HiMegaphone />}
        />
        <NavIcon
          path="/create"
          IconComponent={<IoAddCircleOutline />}
          activeIcon={<IoAddCircle />}
        />
        <NavIcon
          path="/tasks"
          IconComponent={<MdOutlineAssignment />}
          activeIcon={<MdAssignment />}
        />
        <Avatar path="/profile" />
      </div>
    </div>
  );
};

export default Navbar;
