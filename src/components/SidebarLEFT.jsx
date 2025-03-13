import React from "react";
import logo from "../assets/Img/logo.svg";
import { sidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";

const notActiveStyle = "text-left text-[#e9e8ea] text-[14px] w-[68px] h-[16px]";
const activeStyle = "text-left text-[#ffffff] text-[14px] w-[68px] h-[16px]";

const SidebarLEFT = () => {
  return (
    <div className="flex flex-col bg-[#231b2e]">
      {/* Logo */}
      <div className="flex items-center text-white text-sm leading-[21px] w-full h-[70px] px-[28px]">
        <img
          className="w-[120px] h-[40px] object-contain ml-[28px]"
          src={logo}
          alt="logo"
        />
      </div>
      {/* Menu Sidebar */}
      <div className="flex flex-col items-center py-3 px-[21px] text-left leading-5 font-medium font-inter">
        {sidebarMenu.map((item) => (
          <NavLink
            key={item.path}
            end={item.end}
            to={item.path}
            className="w-full"
          >
            {({ isActive }) => (
              <div className="py-2 px-[25px] flex justify-start items-center gap-2 w-full">
                <div className="w-[18px] flex items-center justify-center">
                  <item.icon size={18} color="#fff" />
                </div>

                <div className="flex items-center">
                  {/* Text */}
                  <span
                    className={`${isActive ? activeStyle : notActiveStyle}`}
                  >
                    {item.text}
                  </span>
                  {/* Hình ảnh "LIVE" với margin-left: 8px */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt="Live"
                      className="w-[34px] h-[16px] object-contain ml-2 mr-[101px]"
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
