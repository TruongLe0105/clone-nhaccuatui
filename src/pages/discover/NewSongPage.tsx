import { useState } from 'react';
import CardItemMain from '../../components/CardItemMain';

import DefaultTabs from "../../components/discover/DefaultTabs";
import { LinkSong, LinkSingers } from '../../components/Link';
import PaginationDefault from '../../components/PaginationDefault';
import { discover } from '../../jsons/khampha';

const tabs = ['Mới & Hot', 'Việt Nam', 'Âu Mỹ', 'Châu Á', 'Khác'];
const VNTabs = ['Nhạc Trẻ', 'Trữ Tình', 'Remix Việt', 'Rap Việt', 'Tiền Chiến', 'Nhạc Trịnh', 'Rock Việt', 'Cách Mạng'];
const USUKTabs = ['Pop', 'Rock', 'Electronica/Dance', 'R&B/Hip Hop/Rap', 'Blues/Jazz', 'Country', 'Latin', 'Indie', 'Âu Mỹ Khác'];
const AsiaTabs = ['Nhạc Hàn', 'Nhạc Hoa', 'Nhạc Nhật', 'Nhạc Thái'];
const OrtherTabs = ['Thiếu Nhi', 'Không Lời', 'Beat', 'Thể Loại Khác', 'Tui Hát'];

const NewSongPage = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [activeTabInside, setActiveTabInside] = useState<number>(0);

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
                <h3 style={{ padding: 'var(--title_comp)' }}>Mới Và Hot</h3>
            )
                break;
            case 1: return (
                <Tabs data={VNTabs} />
            )
                break;
            case 2: return (
                <Tabs data={USUKTabs} />
            )
                break;
            case 3: return (
                <Tabs data={AsiaTabs} />
            )
                break;
            case 4: return (
                <Tabs data={OrtherTabs} />
            )
                break;
        }
    };

    const RenderCards = ({ data }: any) => {

        return (
            <div
                className='flex align-center justify-between wrap'
                style={{
                    padding: '0 3.2rem'
                }}
            >
                {data.map((item: any, index: number) => (
                    <div key={index} className='flex flex-col' style={{ width: '23%', marginBottom: '1rem' }}>
                        <CardItemMain
                            key={index}
                            item={item}
                            classCard='card-detail'
                            fullOptions={true}
                            isPlayList={true}
                        />
                        <LinkSong el={item} />
                        <LinkSingers el={item.singer} index={index} />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <DefaultTabs
                data={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                setActiveTabInside={setActiveTabInside}
            />
            {renderContent()}
            <RenderCards data={discover} />
            <div className='flex-center'>
                <PaginationDefault
                    count={discover?.length}
                    limit={2}
                />
            </div>
        </div>
    )
};

export default NewSongPage;