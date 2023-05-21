import React from "react";
import AvatarWithBadge from "./AvatarWithBadge";

const photoUrl =
  "https://media.istockphoto.com/id/1329031407/photo/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-happy-guy-enjoying.jpg?s=612x612&w=0&k=20&c=WvjAEx3QlWoAn49drp0N1vmxAgGObxWDpoXtaU2iB4Q=";

const Post = () => {
  return (
    <div className="py-2 mb-2 border-t-2 border-b-2 border-blue-100 shadow-md w-full">
      <div className="flex px-2 justify-between items-center">
        <div className="flex  items-center gap-x-3">
          <AvatarWithBadge />
          <div>
            <p className="text-sm text-gray-900 cursor-pointer">
              Md Mofazzal Hossain
            </p>
            <p className="text-xs text-gray-600">20 May 2023</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs mb-[1px] text-gray-400">Time Remaining</p>
          <div className="text-sm font-bold text-white bg-blue-400 px-4 py-2 rounded-lg shadow-sm">
            7 days left
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm px-4 mt-2">
          আসদাস আসজদনালক্স আসজদনলান্সদা সদ আওই জাওসদ আওউইসুইহ আওপিসজদ
          পাওইজ[অপাইসজদ আপই জদা[প০অদজ]] odit. Ea, nulla beatae sapiente
          reprehenderit iure repellendus nisi laborum asperiores dignissimos
          perferendis cumque minus aliquam vero, quam corporis aliquid hic
          incidunt totam natus? Cum.
        </div>
        <img src={photoUrl} alt="img" className="mt-4 mb-2 cursor-pointer " />
      </div>

      <p className="text-end px-2 text-xs font-semibold text-gray-500 cursor-pointer">
        Seen by 16
      </p>
    </div>
  );
};

export default Post;
