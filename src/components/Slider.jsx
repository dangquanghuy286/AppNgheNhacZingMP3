//----THƯ VIỆN ----//
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Carousel } from "antd";
import * as actions from "../store/actions";

const SliderImg = () => {
  const banner = useSelector((state) => state.app.banner);
  const dispatch = useDispatch();

  const handleClickBanner = (item) => {
    console.log(item);

    if (item?.type === 3) {
      dispatch(actions.getCurSongId(item.encodeId));
    }
  };
  return (
    <div className="w-[1232px] mx-auto leading-0 mt-10 overflow-hidden ">
      {banner && banner.length > 0 ? (
        <Carousel autoplay dotPosition="bottom" className="w-full ">
          {banner.map((item, index) => (
            <div key={index} className="w-[1232px] h-[123px]">
              <img
                src={item.banner}
                alt={item.title || "No title"}
                onClick={() => handleClickBanner(item)}
                className="w-[1232px] h-[123px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No banners available</p>
      )}
    </div>
  );
};

export default SliderImg;

//----Thư Viện----//
//----THUẦN---//
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// const SliderImg = () => {
//   // Lấy danh sách banner từ Redux store
//   const banner = useSelector((state) => state.app.banner);
//   // State lưu chỉ mục của ảnh hiện tại
//   const [currentIndex, setCurrentIndex] = useState(0);

// useEffect(() => {
//     // Kiểm tra nếu mảng banner có dữ liệu
//     if (banner && banner.length > 0) {
//         // Thiết lập interval chạy mỗi 3 giây để thay đổi slide
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === banner.length - 1 // Nếu đang ở ảnh cuối cùng
//                     ? 0  // Quay lại ảnh đầu tiên
//                     : prevIndex + 1 // Ngược lại, chuyển sang ảnh tiếp theo
//             );
//         }, 3000); // 3000ms = 3 giây

//         // Cleanup function: Xóa interval khi component bị hủy (unmount)
//         return () => clearInterval(interval);
//     }
// }, [banner]); // Chạy lại effect khi giá trị banner thay đổi

//   return (
//     <div className="w-[1232px] mx-auto leading-0 mt-10 overflow-hidden relative">
//       {banner && banner.length > 0 ? (
//         <div className="relative w-[1232px] h-[123px]">
//           {/* Hiển thị ảnh hiện tại */}
//           <img
//             src={banner[currentIndex].banner}
//             alt={banner[currentIndex].title || "No title"}
//             className="w-[1232px] h-[123px] object-cover rounded-lg"
//           />

//           {/* Dấu chấm chỉ trạng thái hình ảnh */}
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
//             {banner.map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => setCurrentIndex(index)} // Chuyển ảnh khi click vào dấu chấm
//                 className={`w-8 h-2 rounded-md cursor-pointer ${
//                   index === currentIndex ? "bg-white" : "bg-gray-400"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p className="text-center">No banners available</p> // Hiển thị khi không có ảnh
//       )}
//     </div>
//   );
// };
// export default SliderImg;

//----END-THUẦN----//
