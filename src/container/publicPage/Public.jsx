import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Player, SidebarLEFT, SidebarRight } from "../../components";

function Public() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#170f23]">
      {/* Nội dung chính */}
      <div className="w-full h-full flex flex-auto">
        {/* Sidebar trái */}
        <div className="w-[240px] min-h-screen flex-none">
          <SidebarLEFT />
        </div>
        {/* Phần chính */}
        <div className="flex-auto h-screen overflow-hidden">
          <div className="h-[70px] bg-[#170f23] px-[59px] flex items-center text-[#fff] mb-5">
            <Header />
          </div>
          <Outlet />
        </div>

        <div className="w-[330px] hidden 2xl:flex h-screen flex-none overflow-y-auto  border border-l-[#5d5765]">
          <SidebarRight />
        </div>
      </div>
      {/* Player cố định phía dưới */}
      <div className="flex-none h-[90px] border-t border-[#5d5765]">
        <Player />
      </div>
    </div>
  );
}

export default Public;
