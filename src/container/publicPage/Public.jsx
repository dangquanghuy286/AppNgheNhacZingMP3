import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLEFT, SidebarRight } from "../../components";
function Public() {
  return (
    <>
      <div className="w-full flex justify-between bg-[#170f23]">
        <div className="w-[240px] border border-b-[#5d5765] h-[945px] flex-none overflow-y-auto">
          <SidebarLEFT />
        </div>
        <div className="flex-auto border border-b-[#5d5765]">
          <Outlet />
        </div>
        <div className="w-[330px] border border-b-[#5d5765] h-[945px] flex-none overflow-y-auto">
          <SidebarRight />
        </div>
      </div>
    </>
  );
}

export default Public;
