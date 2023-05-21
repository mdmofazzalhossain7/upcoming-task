import React from "react";
import { TbShare3 } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineTask, MdOutlineHowToVote } from "react-icons/md";
import { PostType } from "../components";
import { BiDonateBlood } from "react-icons/bi";
import { RiAdvertisementFill } from "react-icons/ri";

import { cardColor } from "../config/cardStyle";
const CreatePost = () => {
  return (
    <div>
      <div className="p-4 text-md text-blue-600 font-semibold font-sans border-b-2 border-b-state-400 flex justify-center items-center text-blue-800 shadow-md sticky top-0 z-20 bg-white ">
        <TbShare3 />
        <div className="ml-2 ">What type of post you want to share?</div>
      </div>
      <div className="mx-2 overflow-scroll mb-14 ">
        <PostType
          title="Announcement"
          description="This post will be filtered into announcement section ok fine"
          style={cardColor.skyBlue}
          IconComponent={<TfiAnnouncement />}
        />
        <PostType
          title="Task"
          description="This post will be filtered into task section"
          style={cardColor.greenDark}
          IconComponent={<MdOutlineTask />}
        />
        <PostType
          title="Vote"
          description="Deadline based voting post"
          style={cardColor.yellowOrange}
          IconComponent={<MdOutlineHowToVote />}
        />
        <PostType
          title="Blood Emergency"
          description="This post will be filtered into announcement section ok fine"
          style={cardColor.roseRed}
          IconComponent={<BiDonateBlood />}
        />
        <PostType
          title="Pop-up AD"
          description="This is only for the app owner"
          style={cardColor.lime}
          IconComponent={<RiAdvertisementFill />}
        />
      </div>
    </div>
  );
};

export default CreatePost;
