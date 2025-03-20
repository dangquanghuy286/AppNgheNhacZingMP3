import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDetailSong } from "../services/Music";
import icons from "../utils/icons";

const { FaRegHeart, FaHeart, HiDotsHorizontal } = icons;
const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  const [songDetail, setSongDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSongDetail = async () => {
      if (curSongId) {
        setLoading(true);
        setError(null);
        try {
          const result = await getDetailSong(curSongId);
          console.log(result);
          if (result.err === 0) {
            setSongDetail(result.data);
          } else {
            setError(new Error("Failed to fetch song details"));
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSongDetail();
  }, [curSongId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching song details: {error.message}</div>;
  }
  return (
    <div className="bg-[#170f23] px-5 h-full flex text-[#fff] text-500 ">
      <div className="w-[29.85%] flex-auto border border-l-[#5d5765] flex items-center gap-2.5">
        <img
          src={songDetail?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-2 ">
          <span className="font-semibold text-[#fff] leading-[19.04px] w-[125px] h-[19px] text-sm">
            {songDetail?.title}
          </span>
          <span className="text-xs text-[#76727b]">
            {songDetail?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2 ">
          <span>
            <FaRegHeart size={16} />
          </span>
          <span>
            <HiDotsHorizontal size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40.3%] flex-auto">Main</div>
      <div className="w-[29.85%] flex-auto">Volume</div>
    </div>
  );
};

export default Player;
