import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavIcon = ({ path, IconComponent, activeIcon }) => {
  const [active, setActive] = useState(false);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const matchRoutes = (route) => {
      if (pathname === route) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    matchRoutes(path);
  }, [pathname, path]);

  return (
    <button
      className={`py-2 px-2 sm:px-6 md:px-8  text-4xl border-b-[3px] border-b-transparent
      transition delay-100
       ${
         !active &&
         "hover:bg-gray-100 active:text-gray-300 hover:text-blue-300 hover:animate-pulse"
       }
       
       ${active ? "border-b-blue-200 text-blue-400" : "text-gray-300"}
       `}
      onClick={() => navigate(path)}
    >
      {active ? activeIcon : IconComponent}
    </button>
  );
};

export default NavIcon;
