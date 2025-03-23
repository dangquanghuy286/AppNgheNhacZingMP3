import actionType from "./actionsTypes";

export const setCurSongId = (songId) => ({
  type: actionType.SET_CUR_SONG_ID,
  songId,
});

export const play = () => ({
  type: actionType.PLAY,
});

export const pause = () => ({
  type: actionType.PAUSE,
});