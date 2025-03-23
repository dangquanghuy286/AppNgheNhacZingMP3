import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailSong } from "../services/Music";
import icons from "../utils/icons";
import { play, pause } from "../store/actions";

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
  // const dispatch = useDispatch();
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songDetail, setSongDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  console.log(isPlaying);

  useEffect(() => {
    const fetchSongDetail = async () => {
      if (curSongId) {
        try {
          setLoading(true);
          const result = await getDetailSong(curSongId);
          setSongDetail(result);
          console.log(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSongDetail();
  }, [curSongId]);

  const dispatch = useDispatch();

  const handleTogglePlay = () => {
    dispatch(isPlaying ? pause() : play());
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  if (!songDetail) return <div className="text-white">No song selected</div>;

  return (
    <div className="bg-[#170f23] px-5 py-2 h-full flex text-white">
      {/* Left: Song Details */}
      <div className="w-[30%] flex items-center gap-3">
        <img
          src={songDetail?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-sm truncate w-[125px]">
            {songDetail?.title}
          </span>
          <span className="text-xs text-[#76727b]">
            {songDetail?.artistsNames}
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
