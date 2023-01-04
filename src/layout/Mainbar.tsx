import { useState, useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { PATH } from '../helpers/constant';
import { ItemMenu, listMenu } from './types';
import { images } from '../helpers/images';
import LoginForm from '../components/forms/LoginForm';

const Mainbar = () => {
    const [active, setActive] = useState<number>(2);
    const [rendered, setRendered] = useState(false);

    const { logo } = images;

    const handleMenuPage = (item: ItemMenu, index: number) => {
        setActive(index);
    };

    const renderIconMenu = (item: ItemMenu) => {
        const Icon = item.icon;
        switch (item.key) {
            case 'search':
                return <Icon className='search-icon' />;
            case 'home':
                return <Icon className='home-icon' />
            case 'discover':
                return <Icon className='discover-icon' />
            case 'listen':
                return <Icon className='listen-icon' />
            case 'chart':
                return <Icon className='chart-icon' />
            case 'orther':
                return <Icon className='heart-icon' />
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setRendered(true);
        }, 500)
    }, []);

    return (
        <div className='flex flex-col container-menu'>
            <div className='flex align-center justify-between header-bar'>
                <a href='/' className='flex align-center logo' >
                    <img src={logo} alt='Logo' width='100%' height='100%' />
                </a>
                <a
                    href='https://www.nhaccuatui.com/nhaccuatui-vip/mua-vip'
                    target='_blank' rel='noreferrer'
                    className='flex-center weight-500 radius-12 border-main package'
                >
                    Nâng cấp
                </a>
            </div>
            <div className='flex align-center wrapper-form'>
                <div className='flex weight-500'>
                    <span className='pointer'>Đăng nhập</span>
                    <div style={{ margin: '0 3px', fontSize: '110%', fontWeight: 0 }}>|</div>
                    <span className='pointer'>Đăng ký</span>
                </div>
                <SettingsIcon className='pointer setting-icon' />
            </div>
            {listMenu.map((item: ItemMenu, index) => (
                <div key={index}>
                    <div
                        onClick={() => handleMenuPage(item, index)}
                        className='flex align-center item-menu'
                        // key={index}
                        style={{
                            background: active === index ? 'rgba(244,246,248,0.05)' : '',
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
                        <ExpandLessIcon
                            className='arrow-up'
                            style={{ display: item.childrens ? 'block' : 'none' }}
                        />
                    </div>
                    {item.childrens && (
                        <div className='childrens-item-menu'>
                            {item.childrens.map((item: string, index: number) => (
                                <div className='flex align-center children-item' key={index}>
                                    <div className='doc-symbol' />
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div>
                <div className='chat-bot' />
            </div>
            <div className='flex-center fixed inset-0 z-999 bg-fixed'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Mainbar;