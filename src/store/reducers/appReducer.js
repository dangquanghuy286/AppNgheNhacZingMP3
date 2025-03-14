import actionType from "../actions/actionsTypes";

const initState = {
    banner:[]
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME:
            return { ...state }; // Giữ nguyên state (nếu chưa có logic mới)

        default:
            return state; // ✅ Luôn trả về state để tránh lỗi
    }
};

export default appReducer;
