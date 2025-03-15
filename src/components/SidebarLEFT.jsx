import React from "react";
import logo from "../assets/Img/logo.svg";
import { sidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle = "text-[#e9e8ea] text-[14px]";
const activeStyle = "text-[#ffffff] text-[14px] font-bold";

const SidebarLEFT = () => {
  return (
    <div className="flex  flex-col bg-[#231b2e] h-full ">
      {/* Logo */}
      <NavLink to="/">
        <div className="flex items-center text-white text-sm w-full h-[70px] px-7">
          <img
            className="w-[120px] h-[40px] object-contain ml-4"
            src={logo}
            alt="logo"
          />
        </div>
      </NavLink>

      {/* Menu Sidebar */}
      <div className="flex flex-col py-3 text-left font-medium">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.path}
            end={item.end}
            to={item.path}
            className="w-full"
          >
            {({ isActive }) => (
              <div
                className={`h-[48px] flex items-center px-[20px] gap-3 w-full ${
                  isActive
                    ? "bg-[#393243] border-l-4 border-[#9b4de0]" // Màu nền và viền tím khi active
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="w-[18px] flex items-center justify-center">
                  <item.icon size={18} color="#fff" />
                </div>

                {/* Text + Icon LIVE */}
                <div className="flex items-center">
                  <span
                    className={`${isActive ? activeStyle : notActiveStyle}`}
                  >
                    {item.text}
                  </span>
                  {item.img && (
                    <img
                      src={item.img}
                      alt="Live"
                      className="w-[34px] h-[16px] object-contain ml-2"
                    />
                  )}
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLEFT;
