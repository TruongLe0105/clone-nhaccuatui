import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ButtonDefault from '../../components/ButtonDefault';
import { DownIcon, ShareIcon } from '../../components/CustomIcon';

import DefaultTabs from '../../components/discover/DefaultTabs';
import { LinkSingers } from '../../components/Link';
import MoreOptions from '../../components/MoreOptions';
import { data } from '../../jsons/top';

const MainTabs = ['Việt Nam', 'Âu Mỹ', 'Châu Á', 'Không Lời'];
const VNTabs = ['Nhạc Trẻ', 'Trữ Tình', 'Rap Việt', 'Tiền Chiến', 'Nhạc Trịnh', 'Rap Việt', 'Remix Việt'];
const USUKTabs = ['Pop', 'Electronica/Dance', 'R&B/Hip Hop/Rap', 'Blues/Jazz', 'Country', 'Latin'];
const AsiaTabs = ['Nhạc Hàn', 'Nhạc Hoa', 'Nhạc Nhật'];
const InstrumentalTabs = ['Không Lời'];

const RankHundredPage = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [activeTabInside, setActiveTabInside] = useState<number>(0);
    const [showOptions, setShowOption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const renderTabs = () => {
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
        const iconStyle = { color: 'white' };

        return (
            <div className='flex align-center justify-between banner-rank'>
                <div className='flex flex-col justify-center'>
                    <span style={{ fontSize: '3rem', fontWeight: 'bold' }} >TOP 100</span>
                    <span style={{ color: 'var(--cl_icon)' }}>KHÔNG LỜI - Cập nhật vào: 13/02/2023</span>
                </div>
                <div className='flex align-center'>
                    <ButtonDefault title='Phát tất cả' buttonClass='pointer button-rank' />
                    <DownIcon iconStyle={iconStyle} />
                    <ShareIcon iconStyle={iconStyle} />
                </div>
            </div>
        )
    };

    const RenderContent = () => {

        return (
            <div style={{ margin: '2rem 0 5rem 0' }}>
                {data.map((el: any, index: number) => (
                    <div key={index} className='flex align-center wrapper-item-rank'>
                        <span className='flex-center'>{index + 1}</span>
                        <div className='flex align-center relative item-rank'>
                            <img src={el.img} alt={el.song} />
                            <div>
                                <a title={el.title} className='name-song' style={{ color: 'white' }}>{el.title}</a>
                                <LinkSingers el={el.singers} />
                            </div>
                            <MoreVertIcon
                                onClick={() => {
                                    setShowOption(true)
                                    setActiveIndex(index)
                                }}
                                className={(showOptions && activeIndex === index) ? 'pointer icon-more icon-more-rank' : 'pointer icon-more'}
                            />
                        </div>
                        {(showOptions && activeIndex === index) && (
                            <MoreOptions
                                showOption={showOptions}
                                setShowOption={setShowOption}
                                fullOptions={true}
                                classOption='options-song'
                            />
                        )}
                    </div>
                ))}
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
            {renderTabs()}
            <BannerRank />
            <RenderContent />
        </div>
    )
}

export default RankHundredPage