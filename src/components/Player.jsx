import React from "react";
import { useSelector } from "react-redux";
const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  console.log(curSongId);

  return (
    <div className="bg-[#170f23] px-5 h-full flex text-[#fff] text-500 ">
      <div className="w-[29.85%] flex-auto">Detail</div>
      <div className="w-[40.3%] flex-auto">Main</div>
      <div className="w-[29.85%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
