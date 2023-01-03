import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { PATH } from '../helpers/constant';
import { ItemMenu, listMenu } from './types';
import { images } from '../helpers/images';
import { useState, useRef, useEffect } from 'react';

const Mainbar = () => {
    const [active, setActive] = useState<number>(2);
    const [rendered, setRendered] = useState(false);

    const { logo } = images;

    const handleMenuPage = (item: ItemMenu, index: number) => {
        setActive(index);
    };

    const renderIconMenu = (item: ItemMenu) => {
        switch (item.path) {
            case PATH.search:
                return <SearchIcon className='search-icon' />;
            case PATH.home:
                return <HomeIcon className='home-icon' />
            case PATH.discover:
                return <ExploreIcon className='discover-icon' />
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setRendered(true);
        }, 500)
    }, []);

    console.log("here")

    return (
        <div className='flex flex-col container-menu'>
            <div className='flex align-center justify-between header-bar'>
                <a href='/' className='flex align-center logo' >
                    <img src={logo} alt='Logo' width='100%' height='100%' />
                </a>
                <a
                    href='https://www.nhaccuatui.com/nhaccuatui-vip/mua-vip'
                    target='_blank' rel="noreferrer"
                    className='flex-center weight-500 radius-12 border-main package'
                >
                    Nâng cấp
                </a>
            </div>
            <div className='flex align-center wrapper-form'>
                <div className='flex weight-500'>
                    <span className='pointer'>Đăng nhập</span>
                    <div style={{ margin: '0 3px', fontSize: "110%", fontWeight: 0 }}>|</div>
                    <span className='pointer'>Đăng ký</span>
                </div>
                <SettingsIcon className='pointer setting-icon' />
            </div>
            {listMenu.map((item: ItemMenu, index) => (
                <div
                    onClick={() => handleMenuPage(item, index)}
                    className='flex align-center item-menu'
                    key={index}
                    style={{
                        background: active === index ? "rgba(244,246,248,0.05)" : "",
                    }}
                >
                    <div
                        className={`${active === index ?
                            'border-menu' :
                            'border-hover'
                            }`}
                        style={{ width: rendered ? '2px' : '0px' }}
                    />
                    {renderIconMenu(item)}
                    <span className='label-menu'>
                        {item.label}
                    </span>
                    {item.childrens && <ExpandLessIcon className='arrow-up' />}
                </div>
            ))}
        </div>
    )
}

export default Mainbar;