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
          <NavLink key={item.path} end={item.end} to={item.path}>
            {({ isActive }) => (
              <div className="py-2 px-[25px] flex gap-4 mr-[120px] ml-[57px]">
                {/* Hiển thị icon. Lưu ý: fontWeight không phải prop hợp lệ cho icon nên đã bỏ */}
                <item.icon size={14} color="#fff" />
                {/* Áp dụng style dựa trên trạng thái isActive */}
                <span className={isActive ? activeStyle : notActiveStyle}>
                  {item.text}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarLEFT;
