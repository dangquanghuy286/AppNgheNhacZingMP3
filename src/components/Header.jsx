import React from "react";
import icons from "../utils/icons";
import Search from "./Search";
import Account from "./Account";
const { FaArrowLeft, FaArrowRight } = icons;
const Header = () => {
  return (
    <div className="flex justify-between w-full sticky ">
      <div className="flex gap-8 items-center w-full">
        <div className="flex gap-6  text-[#5d5765]">
          <span>
            <FaArrowLeft size={24} />
          </span>
          <span>
            <FaArrowRight size={24} />
          </span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div>
        <Account />
      </div>
    </div>
  );
};

export default Header;
