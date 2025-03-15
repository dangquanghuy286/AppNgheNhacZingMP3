import actionType from "./actionsTypes"; // Nhập các loại hành động từ tệp actionsTypes
 // Nhập hàm getdataHome từ dịch vụ Home

// Định nghĩa hàm getHome, đây là một hành động bất đồng bộ
export const getCurSongId = (songId) =>({
    type:actionType.SET_CUR_SONG_ID,
    songId
})