import React from "react";
import icons from "../utils/icons";
const { MdOutlineInstallDesktop, IoSettingsOutline, FaUserCircle } = icons;
const Account = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
      {/* Nút nâng cấp tài khoản */}
      <button className="w-[173px] h-[40px] bg-[#9b4de0] rounded-full text-white font-inter text-[14px] font-bold leading-5 tracking-[0.1px] px-5 flex items-center justify-center">
        Nâng cấp tài khoản
      </button>

      {/* Nút tải bản Windows */}
      <div className="flex items-center justify-center gap-2 w-[190px] h-[40px] bg-[#2f2739] text-[#c273ed] font-semibold text-[14px] rounded-[100px] px-5 cursor-pointer">
        <MdOutlineInstallDesktop size={20} />
        <span className="text-center">Tải bản Windows</span>
      </div>

      {/* Nút Settings */}
      <span className="w-[40px] h-[40px] cursor-pointer rounded-full text-[#d8d8d8] flex items-center justify-center bg-[#2c2436]">
        <IoSettingsOutline size={18} />
      </span>

      {/* Nút user */}
      <span className="w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center text-[#fff] bg-[#2c2436]">
        <FaUserCircle size={22} />
      </span>
    </div>
  );
};

export default Account;
