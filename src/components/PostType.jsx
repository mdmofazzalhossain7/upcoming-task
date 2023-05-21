import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";

const PostType = ({ title, description, IconComponent, style }) => {
  return (
    <div
      className={`px-4 py-4 rounded-md my-2 text-white relative bg-slate-800 shadow-sm ${style}`}
    >
      <div className="flex gap-x-4 text-lg items-center">
        {IconComponent}
        <p className="text-md">{title}</p>
      </div>
      <div className="flex">
        <p className="text-xs mt-2 text-gray-200 w-11/12">{description}</p>
      </div>
      <div className="absolute bottom-4 right-4 text-2xl">
        <AiOutlineInfoCircle />
      </div>
    </div>
  );
};

export default PostType;
