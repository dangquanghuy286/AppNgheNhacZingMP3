import actionType from "../actions/actionsTypes"; // Nhập các loại hành động từ tệp actionsTypes

// Khởi tạo state ban đầu với banner là một mảng rỗng
const initState = {
    curSongId:null
};

// Định nghĩa reducer appReducer
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId:action.songId || null
            }
        
        default:
            return state; // ✅ Luôn trả về state để tránh lỗi
    }
};

export default musicReducer;