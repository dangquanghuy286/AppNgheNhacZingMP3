import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDetailSong } from "../services/Music";

import icons from "../utils/icons";
import { isPlay, pause } from "../store/actions";

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
  const audioEl = new Audio();
  const { curSongId } = useSelector((state) => state.music);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDetail, setSongDetail] = useState(null);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [volume, setVolume] = useState(1); // New state variable for volume

  useEffect(() => {
    if (!curSongId) {
      setSongDetail(null);
      setSource(null);
      return;
    }

    const fetchSongDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await getDetailSong(curSongId);

        console.log("Fetched song details:", result); // Debugging

        if (!result || typeof result !== "object") {
          throw new Error("Invalid response format");
        }

        // Nếu kết quả là object, dùng destructuring theo object thay vì array
        const res1 = result?.res1 || result[0]; // Hỗ trợ cả object và mảng
        console.log(res1);

        const res2 = result?.res2 || result[1];

        if (res1?.err === 0) {
          setSongDetail(res1.data);
        } else {
          setSongDetail(null);
        }

        if (res2?.err === 0 && res2.data?.["128"]) {
          setSource(res2.data["128"]);
        } else {
          setSource(null);
        }
      } catch (error) {
        console.error("Error fetching song details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    console.log(songDetail);

    fetchSongDetail().catch((error) => {
      console.error("Error in fetchSongDetail:", error);
      setError(error);
    });
  }, [curSongId]);

  useEffect(() => {
    if (source) {
      audioEl.src = source;
      audioEl.volume = volume; // Set initial volume
      if (isPlaying) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    }
  }, [source, isPlaying, volume]); // Add volume to dependency array

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioEl.volume = e.target.value;
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  if (!songDetail) return <div className="text-white">No song selected</div>;

  return (
    <div className="bg-[#170f23] px-5 py-2 h-full flex text-white">
      {/* Left: Song Details */}
      <div className="w-[30%] flex items-center gap-3">
        <img
          src={songDetail.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm truncate w-[125px]">
            {songDetail.title}
          </span>
          <span className="text-xs text-[#76727b]">
            {songDetail.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <FaRegHeart size={16} className="cursor-pointer" />
          <HiDotsHorizontal size={16} className="cursor-pointer" />
        </div>
      </div>

      {/* Center: Player Controls */}
      <div className="w-[40%] flex flex-col items-center justify-center">
        <div className="flex gap-6 justify-center items-center">
          <CiShuffle
            size={24}
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#757575]"
          />
          <MdSkipPrevious
            size={26}
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#757575]"
          />
          <span
            className="cursor-pointer w-14 h-14 flex items-center justify-center rounded-full hover:text-[#757575]"
            onClick={handleTogglePlay}
          >
            {isPlaying ? (
              <MdPauseCircle size={50} />
            ) : (
              <MdPlayCircle size={50} />
            )}
          </span>
          <MdSkipNext
            size={26}
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#757575]"
          />
          <CiRepeat
            size={24}
            className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#757575]"
          />
        </div>
        <div>Song Progress Bar (Optional)</div>
      </div>

      {/* Right: Volume */}
      <div className="w-[30%] flex items-center justify-center">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default Player;
