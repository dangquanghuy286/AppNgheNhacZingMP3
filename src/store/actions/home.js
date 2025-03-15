import actionType from "./actionsTypes"; // Nhập các loại hành động từ tệp actionsTypes
import { getdataHome } from "../../services/Home"; // Nhập hàm getdataHome từ dịch vụ Home

// Định nghĩa hàm getHome, đây là một hành động bất đồng bộ
export const getHome = () => async (dispatch) => {
    try {
        // Gọi hàm getdataHome để lấy dữ liệu từ API
        const result = await getdataHome();
        
        // Kiểm tra nếu không có lỗi (err === 0)
        if (result?.err === 0) {
            // Dispatch hành động GET_HOME với dữ liệu homeData là các mục (items) từ kết quả
            dispatch({
                type: actionType.GET_HOME,
                homeData: result.data.items 
            });
        } else {
            // Nếu có lỗi, dispatch hành động GET_HOME với homeData là null
            dispatch({
                type: actionType.GET_HOME,
                homeData: null
            });
        }
    } catch (error) {
        // Nếu có lỗi trong quá trình lấy dữ liệu, ghi lỗi vào console
        console.error("Error fetching home data:", error);
        // Dispatch hành động GET_HOME với homeData là null
        dispatch({
            type: actionType.GET_HOME,
            homeData: null
        });
    }
};