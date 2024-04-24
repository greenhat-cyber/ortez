import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineServer } from "react-icons/hi2";

interface SidebarItem {
  title: string;
  icone: JSX.Element;
  path: string;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarData: SidebarItem[] = [
    {
      title: "Dashboard",
      icone: <LuLayoutDashboard size={25} />,
      path: "/dashboard",
    },
    {
      title: "Master",
      icone: <HiOutlineServer size={25} />,
      path: "/master",
    },
  ];

  return (
    <div className="w-[8%] h-screen bg-primary border-r fixed">
      <div className="mt-8 flex gap-2 flex-col">
        {sidebarData.map((item, idx) => (
          <div
            key={idx}
            className={`${
              location.pathname === item.path
                ? "bg-white text-primary"
                : "text-white"
            } w-full h-[5rem] flex items-center justify-center flex-col gap-2 cursor-pointer hover:bg-white hover:text-primary`}
            onClick={() => navigate(item.path)}
          >
            {item.icone}
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
