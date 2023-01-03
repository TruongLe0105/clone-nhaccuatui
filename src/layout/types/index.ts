import { PATH } from '../../helpers/constant';

export interface ItemMenu {
    path: string;
    label: string;
}

export const listMenu: ItemMenu[] = [
    {
        path: PATH.search,
        label: "Tìm Kiếm"
    },
    {
        path: PATH.home,
        label: "Trang Chủ"
    },
    {
        path: PATH.discover,
        label: "Khám Phá"
    }
]