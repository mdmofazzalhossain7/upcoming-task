import { MdArrowBack } from "react-icons/md";

const ViewImage = () => {
  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-scroll flex justify-center items-center">
      <img
        src="https://media.istockphoto.com/id/1329031407/photo/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-happy-guy-enjoying.jpg?s=612x612&w=0&k=20&c=WvjAEx3QlWoAn49drp0N1vmxAgGObxWDpoXtaU2iB4Q="
        alt="imageasd"
        className="w-full h-full object-contain"
      />
      <button
        className="absolute flex items-center top-6 left-4 px-4 py-2  rounded-full shadow-md text-white bg-white bg-opacity-10 active:bg-opacity-30"
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
      >
        <MdArrowBack className="text-2xl" />
        <p className="text-sm ml-1">Back</p>
      </button>
    </div>
  );
};

export default ViewImage;
