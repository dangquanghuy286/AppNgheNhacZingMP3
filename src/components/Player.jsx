import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDetailSong } from "../services/Music";
import icons from "../utils/icons";

const {
  FaRegHeart,
  HiDotsHorizontal,
  MdSkipPrevious,
  MdSkipNext,
  CiRepeat,
  MdPlayCircle,
  CiShuffle,
  MdPauseCircle,
} = icons;

const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  const [songDetail, setSongDetail] = useState(null);
  const [loading, setLoading] = useState(false); // Đổi thành false để không loading khi không có curSongId
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!curSongId) {
      setSongDetail(null);
      return; // Early return if no `curSongId`
    }

    console.log("Current Song ID:", curSongId);
    const fetchSongDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getDetailSong(curSongId);
        console.log("API Result:", result);
        if (result.err === 0) {
          setSongDetail(result.data);
        } else {
          setError(new Error(result.msg));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongDetail();
  }, [curSongId]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-white">
        Error fetching song details: {error.message}
      </div>
    );
  }

  if (!songDetail || !curSongId) {
    return <div className="text-white">No song selected</div>;
  }

  return (
    <div className="bg-[#170f23] px-5 h-full flex text-[#fff]  py-2">
      <div className="w-[29.85%] flex-auto flex items-center gap-2.5 ">
        <img
          src={songDetail.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-white text-sm truncate w-[125px]">
            {songDetail.title}
          </span>
          <span className="text-xs text-[#76727b]">
            {songDetail.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <FaRegHeart size={16} />
          </span>
          <span>
            <HiDotsHorizontal size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40.3%] flex-auto  flex flex-col items-center justify-center gap-0.5">
        <div className="flex gap-8 justify-center items-center">
          <span>
            <CiShuffle size={26} />
          </span>
          <span>
            <MdSkipPrevious size={26} />
          </span>
          <span>
            <MdPlayCircle size={50} />
          </span>
          <span>
            <MdSkipNext size={26} />
          </span>
          <span>
            <CiRepeat size={26} />
          </span>
        </div>
        <div>pro</div>
      </div>
      <div className="w-[29.85%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
