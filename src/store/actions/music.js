import actionType from "./actionsTypes";


// Set the current song ID
export const setCurSongId = (songId) => ({
  type: actionType.SET_CUR_SONG_ID,
  payload: songId, // Using `payload` is more standard in Redux for passing data
});

// Toggle play state
export const isPlay = (flag) => ({
  type: actionType.PLAY,
  payload: flag, // Updated to `payload` for consistency
});

// Pause the playback
export const pause = () => ({
  type: actionType.PAUSE,
});
