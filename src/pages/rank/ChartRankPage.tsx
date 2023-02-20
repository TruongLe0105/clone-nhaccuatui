import { useState } from 'react';
import ButtonDefault from '../../components/ButtonDefault';
import { DownIcon, ShareIcon } from '../../components/CustomIcon';

import DefaultTabs from '../../components/discover/DefaultTabs';
import { LinkSingers } from '../../components/Link';
import { data } from '../../jsons/topSong';
import CardRank from './CardRank';

const tabs = ['BXH TUẦN', 'REALTIME'];
const subTabs = ['Việt Nam', 'Âu Mỹ', 'Hàn Quốc'];

export const HistoryRank = () => {
    return (

        <div className='flex' >
            <div className='flex flex-col' style={{ width: '33%' }}>
                <span
                    className='bold'
                    style={{ color: 'orange', fontSize: '2rem', marginBottom: '4px' }}
                >-</span>
                <span style={{ color: 'var(--cl_icon)' }}>TUẦN TRƯỚC</span>
            </div>
            <div className='flex flex-col' style={{ width: '33%' }}>
                <span
                    className='bold'
                    style={{ color: 'blue', fontSize: '2rem', marginBottom: '4px' }}
                >1</span>
                <span style={{ color: 'var(--cl_icon)' }}>CAO NHẤT</span>
            </div>
            <div className='flex flex-col' style={{ width: '33%' }}>
                <span
                    className='bold'
                    style={{ color: 'green', fontSize: '2rem', marginBottom: '4px' }}
                >1</span>
                <span style={{ color: 'var(--cl_icon)' }}>TUẦN TRONG BXH</span>
            </div>
        </div>
    )
}

const ChartRankPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [activeTabInside, setActiveTabInside] = useState(0);

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
    };

    const Header = () => {
        return (
            <div className='flex align-center justify-between header-chart-rank'>
                <div className='flex align-center' >
                    <h2>Tuần 6:</h2>
                    <div className='flex align-center justify-between time-line'>
                        <i className="fa-solid fa-angle-left"></i>
                        <span>05/02 - 11/02</span>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
                <div className='flex align-center'>
                    <a>Bài hát</a>
                    <span className='line'>|</span>
                    <a>Video</a>
                </div>
            </div>
        )
    };

    const BannerChart = () => {

        return (
            <div className='flex align-center banner-chart'>
                <div className='relative flag'>
                    <img src='https://avatar-ex-swe.nixcdn.com/song/2023/02/09/3/c/3/5/1675911903909_300.jpg' alt='img' />
                    <span className=''>Top1</span>
                </div>
                <div className='flex flex-col w-100'>
                    <div className='relative content-banner-chart'>
                        <span>Bài hát <span>Luôn Yêu Đời</span></span>
                        <div style={{ marginTop: '1rem' }}>
                            <a title='Đen' style={{ zIndex: 1 }}>
                                <img src='https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/06/9/a/7/b/1596692465856_300.jpg' alt='img' />
                            </a>
                            <a title='Cheng'>
                                <img src='https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/03/30/c/2/0/6/1617089241824_300.jpg' alt='img' />
                            </a>
                            <div className='relative' style={{ left: '6rem' }}>
                                <LinkSingers el={['Đen', 'Cheng']} />
                            </div>
                        </div>
                    </div >
                    <HistoryRank />
                </div >
            </div >
        )
    };

    const RenderRankChart = () => {

        return (
            <div className='content-rank-chart'>
                <div
                    className='flex align-center justify-between'
                    style={{
                        background: 'var(--bg_input)',
                        padding: '.5rem 2rem',
                        borderRadius: '4px'
                    }}
                >
                    <ButtonDefault
                        title='Phát tất cả'
                        buttonClass='pointer button-rank'
                    />
                    <div className='flex align-center'>
                        <DownIcon />
                        <ShareIcon />
                    </div>
                </div>
                <div className='w-100' style={{ margin: '1.5rem 0 5rem 0' }}>
                    <CardRank
                        data={data}
                        classCard='card-item-chart'
                        showMore={true}
                    // showContent={showContent}
                    // setShowContent={setShowContent}
                    />
                </div>
            </div>
        )
    }

    return (
        <div>
            <DefaultTabs
                data={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            {currentTab === 0 && <Tabs data={subTabs} />}
            <Header />
            <BannerChart />
            <RenderRankChart />
        </div>
    )
}

export default ChartRankPage;