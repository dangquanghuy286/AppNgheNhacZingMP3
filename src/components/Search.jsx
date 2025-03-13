import React from "react";
import icons from "../utils/icons";
const { TbMusicSearch } = icons;
const Search = () => {
  return (
    <div className="w-full flex items-center bg-[#2f2739] rounded-[20px]">
      <span className="h-10 pl-4 flex items-center justify-center cursor-pointer  ">
        <TbMusicSearch size="20px" />
      </span>
      <input
        type="text"
        className="outline-none px-4 py-2 rounded-2xl h-[40px] w-[440px] text-[#eee]-500 font-inter text-[14px] leading-[34px]"
        placeholder="Tìm kiếm bài hát , nghệ sỹ , lời bài hát ..."
      />
    </div>
  );
};

export default Search;
