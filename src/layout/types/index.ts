import { PATH } from '../../helpers/constant';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import BarChartIcon from '@mui/icons-material/BarChart';
import InterestsIcon from '@mui/icons-material/Interests';

export interface ItemMenu {
    // path: string;
    key: string;
    label: string;
    icon: any;
    childrens?: string[];
}

export const listMenu: ItemMenu[] = [
    {
        // path: PATH.search,
        key: "search",
        label: "Tìm Kiếm",
        icon: SearchIcon
    },
    {
        // path: PATH.home,
        key: "home",
        label: "Trang Chủ",
        icon: HomeIcon
    },
    {
        // path: PATH.discover,
        key: "discover",
        label: "Khám Phá",
        childrens: ["Bài Hát", "Playlist", "Video", "Nghệ Sĩ"],
        icon: ExploreIcon
    },
    {
        // path: PATH.listen,
        key: "listen",
        label: "Nghe Gì Hôm Nay",
        childrens: ["Chủ Đề", "Tuyển Tập", "Top100"],
        icon: EarbudsBatteryIcon
    },
    {
        // path: PATH.chart,
        key: "chart",
        label: "Bảng Xếp Hạng",
        icon: BarChartIcon
    },
    {
        // path: PATH.orther,
        key: "orther",
        label: "Music 4U",
        icon: InterestsIcon
    },
]