import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { MdBloodtype, MdLocationCity, MdLocationPin } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbCirclesRelation } from "react-icons/tb";
import { Button, IconText, ProfileInfo } from "../components";

const dp =
  "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=";

const Profile = () => {
  return (
    <div className="relative">
      <div className="overflow-y-scroll mb-24">
        <div className="flex flex-row-reverse justify-center items-center px-2 mt-6 mx-auto">
          <img
            src={dp}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover"
          />

          <div className="flex flex-col items-end mr-2 ">
            <p className="text-xs text-gray-500">@mdmofazzalhossain785</p>
            <h1 className="text-md text-end font-semibold">
              Md Abu Obayda Zubayed Sayeb asdas asd
            </h1>
            <p className="text-sm text-end">
              This is a test ei bayota onek beshi e brp tai na bio
            </p>
            <div className="flex mt-2 gap-x-4 text-xs font-semibold">
              <div className="flex items-center ">
                <MdBloodtype className="text-red-600" />
                <p className="ml-1">A+</p>
              </div>
              <div className="flex items-center">
                <MdLocationCity className="text-gray-600" />
                <p className="ml-1">Uttar Badda</p>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}

        <div className="mx-6 my-4">
          <div className="py-4 flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1 mb-1">
              <IconText
                title="Student Information"
                IconComponent={<FaRegAddressCard />}
              />
              <ProfileInfo label="Student ID" value="213902114" />
              <ProfileInfo
                label="E-mail"
                value="mdmofazzalhossainassasfsfasdasdasasdasdasd789@gmail.com"
              />
              <ProfileInfo label="Section" value="A" />
              <ProfileInfo label="Batch" value="213" />
              <ProfileInfo
                label="Department"
                value="Computer Science and Engineering"
              />
            </div>
            <IconText title="Blood Type" IconComponent={<MdBloodtype />} />
            <div className="flex flex-col gap-y-1 mb-1">
              <ProfileInfo label="Blood Group" value="A+ (A positive)" />
            </div>
            <IconText title="Address" IconComponent={<MdLocationPin />} />
            <div className="flex flex-col gap-y-1 mb-1">
              <ProfileInfo label="Area" value="Uttar Badda" />
              <ProfileInfo label="City" value="Dhaka" />
            </div>
            <IconText
              title="Relationship"
              IconComponent={<TbCirclesRelation />}
            />
            <div className="flex flex-col gap-y-1 mb-1">
              <ProfileInfo label="Status" value="Single" />
            </div>
          </div>
        </div>
        <div className="fixed right-0 left-0 bottom-[60px] mx-5">
          <Button
            title="Log Out"
            path="/log-in"
            styles={"text-white bg-red-500 hover:bg-red-600 active:bg-red-400"}
            IconComponent={<AiOutlineLogout />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
