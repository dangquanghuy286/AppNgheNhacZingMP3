import icons from "./icons";
const { MdOutlineLibraryMusic ,MdRadioButtonChecked,MdInsights ,GiMusicalScore} = icons;

export const sidebarMenu = [
  {
    path: 'mymusic',
    text: "Thư viện",
    icon: MdOutlineLibraryMusic // Sửa đổi để không sử dụng JSX
  },
  {
    path: '',
    end:true,
    text: "Khám phá",
    icon: MdRadioButtonChecked // Sửa đổi để không sử dụng JSX
  },
  {
    path: 'zing-chart',
    text: "#zingchart",
    icon: MdInsights // Sửa đổi để không sử dụng JSX
  },
  {
    path: 'radio',
    text: "Radio",
    icon: GiMusicalScore // Sửa đổi để không sử dụng JSX
  },
];