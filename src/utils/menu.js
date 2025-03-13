import icons from "./icons";
import live from "../assets/Img/liveRadio.svg"
const { MdOutlineLibraryMusic ,MdRadioButtonChecked,MdInsights ,GiMusicalScore,MdOutlineFeed} = icons;

export const sidebarMenu = [
  {
    path: 'mymusic',
    text: "Thư viện",
    icon: MdOutlineLibraryMusic 
  },
  {
    path: '',
    end:true,
    text: "Khám phá",
    icon: MdRadioButtonChecked 
  },
  {
    path: 'zing-chart',
    text: "#zingchart",
    icon: MdInsights 
  },
  {
    path: 'radio',
    text: "Radio",
    icon: GiMusicalScore,
    img: live
  },
  {
    path: 'feed',
    text: "Theo dõi",
    icon: MdOutlineFeed
  },
];