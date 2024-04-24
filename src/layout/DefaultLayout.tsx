import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header/Header";

const DefaultLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-w-[100%] pl-[8%] max-lg:pl-0 max-lg:min-w-0">
        <Header/>
        <div className="pl-2 px-4">
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
