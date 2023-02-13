import { useState } from 'react';
import ButtonDefault from '../../components/ButtonDefault';

import DefaultTabs from '../../components/discover/DefaultTabs';
import { HiddenContentMain } from '../../components/HiddenContent';

const MainTabs = ['Việt Nam', 'Âu Mỹ', 'Châu Á', 'Không Lời'];
const VNTabs = ['Nhạc Trẻ', 'Trữ Tình', 'Rap Việt', 'Tiền Chiến', 'Nhạc Trịnh', 'Rap Việt', 'Remix Việt'];
const USUKTabs = ['Pop', 'Electronica/Dance', 'R&B/Hip Hop/Rap', 'Blues/Jazz', 'Country', 'Latin'];
const AsiaTabs = ['Nhạc Hàn', 'Nhạc Hoa', 'Nhạc Nhật'];
const InstrumentalTabs = ['Không Lời'];

const icons = [
    {
        icon: <i className="fa-solid fa-download"></i>,
        title: 'Tải về'
    },
    {
        icon: <i className="fa-solid fa-share-nodes"></i>,
        title: 'Chia sẻ'
    }
]

const RankHundredPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [activeTabInside, setActiveTabInside] = useState<number>(0);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState<any>();

    const handleClickTabInside = (tab: string, index: number) => {
        setActiveTabInside(index);
    }

    const Tabs = ({ data }: any) => {
        return (
            <div className='w-100 flex-center tabs-inside'>
                {data.map((tab: any, index: number) => (
                    <span
                        className='pointer tab-inside'
                        key={index}
                        style={{
                            color: activeTabInside === index ? 'var(--cl_hover)' : ''
                        }}
                        onClick={() => handleClickTabInside(tab, index)}
                    >{tab}</span>
                ))}
            </div>
        )
    }

    const renderContent = () => {
        switch (currentTab) {
            case 0: return (
                <Tabs data={VNTabs} />
            )
                break;
            case 1: return (
                <Tabs data={USUKTabs} />
            )
                break;
            case 2: return (
                <Tabs data={AsiaTabs} />
            )
                break;
            case 3: return (
                <Tabs data={InstrumentalTabs} />
            )
                break;
        }
    };

    const BannerRank = () => {
        return (
            <div>
                <div className='flex flex-col justify-center'>
                    <span>TOP 100</span>
                    <span>KHÔNG LỜI - Cập nhật vào: 13/02/2023</span>
                </div>
                <div className='flex align-center'>
                    <ButtonDefault title='Phát tất cả' />
                    {icons.map((el: any, index: number) => (
                        <div
                            key={index}
                            onMouseEnter={() => {
                                setShow(true)
                                setActive(index)
                            }}
                            onMouseLeave={() => {
                                setShow(false)
                                setActive(-1)
                            }}
                            style={{ position: 'relative' }}
                        >
                            {el.icon}
                            {(show && active === index) && <HiddenContentMain content={el.title} />}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div>
            <DefaultTabs
                data={MainTabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                setActiveTabInside={setActiveTabInside}
            />
            {renderContent()}
            <BannerRank />
        </div>
    )
}

export default RankHundredPage