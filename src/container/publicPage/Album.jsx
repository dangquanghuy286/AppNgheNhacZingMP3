import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailPlayList } from "../../services/Music";

const Album = () => {
  const { pid } = useParams();
  const [playList, setPlayList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const res = await getDetailPlayList(pid);
        setPlayList(res.data?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (pid) {
      fetchApi();
    }
  }, [pid]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;
  if (!playList) return <div className="text-white">No playlist available</div>;

  return (
    <div className="flex gap-8 w-full px-[59px] text-[#fff]">
      {/* Left Panel */}
      <div className="flex-none w-1/4 border border-amber-50 p-4">
        {playList.thumbnail ? (
          <img
            src={playList.thumbnail}
            alt="Album Thumbnail"
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <div className="text-center">No Thumbnail Available</div>
        )}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            {playList.title || "No Title"}
          </h2>
          <p className="text-sm text-gray-400">
            {playList.artistsNames || "Unknown Artist"}
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-auto border border-amber-50 p-4">
        <h3 className="text-lg font-bold mb-4">Playlist Songs</h3>
        {playList.songList && playList.songList.length > 0 ? (
          <ul className="space-y-2">
            {playList.songList.map((item, index) => (
              <li key={index} className="border-b border-gray-600 py-2">
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <div>No songs in this playlist</div>
        )}
      </div>
    </div>
  );
};

export default Album;
