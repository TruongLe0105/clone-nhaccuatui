import { PATH } from '../../helpers/constant';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import BarChartIcon from '@mui/icons-material/BarChart';
import InterestsIcon from '@mui/icons-material/Interests';

export interface ItemMenu {
    path?: string;
    key: string;
    label: string;
    icon: any;
    childrens?: {
        title: string;
        route: string;
    }[];
}

export const listMenu: ItemMenu[] = [
    {
        path: PATH.search,
        key: "search",
        label: "Tìm Kiếm",
        icon: SearchIcon
    },
    {
        path: PATH.home,
        key: "home",
        label: "Trang Chủ",
        icon: HomeIcon
    },
    {
        // path: PATH.discover,
        key: "discover",
        label: "Khám Phá",
        childrens: [
            {
                title: "Bài Hát",
                route: PATH.discover.song,
            },
            {
                title: "Playlist",
                route: PATH.discover.playlist,
            },
            {
                title: "Video",
                route: PATH.discover.video,
            },
            {
                title: "Nghệ Sĩ",
                route: PATH.discover.artist
            }
        ],
        icon: ExploreIcon
    },
    {
        // path: PATH.listen,
        key: "listen",
        label: "Nghe Gì Hôm Nay",
        childrens: [
            {
                title: "Chủ Đề",
                route: PATH.topic
            },
            {
                title: "Tuyển Tập",
                route: PATH.collection
            },
            {
                title: "Top 100",
                route: PATH.top100
            }
        ],
        icon: EarbudsBatteryIcon
    },
    {
        path: PATH.chart,
        key: "chart",
        label: "Bảng Xếp Hạng",
        icon: BarChartIcon
    },
    {
        path: PATH.orther,
        key: "orther",
        label: "Music 4U",
        icon: InterestsIcon
    },
]