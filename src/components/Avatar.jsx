import { useNavigate } from "react-router-dom";

const uri =
  "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/85188777_2418369071759190_6394585650904956928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFmEe3wZ5alANz07LJptBMxO6mjkgEUfhk7qaOSARR-GX41-ha_RNtTadXEFB0ww-tLH5ehgtAyKVDKgfclt2N7&_nc_ohc=MBg0Yq1eEP4AX_AnNIA&_nc_oc=AQn2Hh6USwadDh81WF4rRJoNoHSguZ2POs1nyjkfPItWm3ICtQm9H-pj8gTSxjdWeeY&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCtJOUxd-qQUg0umQzkZc-2UIpYnBRNNQJNdg0dd-fDEg&oe=6490E619";

const Avatar = ({ path }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`hover:opacity-80 active:opacity-90 h-[40px] w-[40px] overflow-hidden active:border-blue-400 border-gray-200 border-2 rounded-full transition delay-100`}
    >
      <img
        src={uri}
        alt="profile"
        className="h-full w-full rounded-full object-cover"
        onClick={() => navigate(path)}
      />
    </button>
  );
};

export default Avatar;
