import actionType from "../actions/actionsTypes";


const initState = {
  curSongId: null,
  isPlaying: false,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.songId || null,
      };
    case actionType.PLAY:
      return {
        ...state,
        isPlaying: true,
      };
    case actionType.PAUSE:
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
};

export default musicReducer;