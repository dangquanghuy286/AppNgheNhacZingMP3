
import actionType from "../actions/actionsTypes"; // Nhập các loại hành động từ tệp actionsTypes

// Khởi tạo state ban đầu với banner là một mảng rỗng
const initState = {
    banner: [],
   
};

// Định nghĩa reducer appReducer
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_HOME: {
            // Tìm phần tử có sectionType là "banner" trong homeData
            const bannerSection = action.homeData?.find(item => item.sectionType === "banner");
            return { 
                ...state,
                banner: bannerSection ? bannerSection.items : [] // Đảm bảo banner luôn là một mảng
            };
        }
       

        default:
            return state; // ✅ Luôn trả về state để tránh lỗi
    }
};

export default appReducer;