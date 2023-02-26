/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import DefaultTabs from '../../../components/discover/DefaultTabs';
import HeaderArtist from './HeaderArtist';
import { data } from '../../../jsons/artist';
import { LinkSingers } from '../../../components/Link';
import PaginationDefault from '../../../components/PaginationDefault';

const tabs = ['Hot', 'Việt Nam', 'Âu Mỹ', 'Hàn Quốc'];
const options = ['Nam', 'Nữ', 'Nhóm nhạc'];

const ArtistPage = () => {
    const [currentTab, setcurrentTab] = useState(0);
    const [currentOption, setCurrentOption] = useState(0);

    const handleClickOption = (index: number) => {
        setCurrentOption(index);
    }

    const TabInside = () => {

        return (
            <div className='flex-center option-artist'>
                {options.map((option: string, index: number) => (
                    <a
                        onClick={() => handleClickOption(index)}
                        style={{
                            color: currentOption === index ? 'var(--cl_hover)' : ''
                        }}
                        key={index}
                        href=''
                    >{option}</a>
                ))}
                <select>All</select>
            </div>
        )
    };

    const RenderArtist = () => {

        return (
            <div className='flex justify-between align-center wrapper-artists'>
                {data.map((el: any, index: number) => (
                    <div key={index} className='flex flex-col'>
                        <img src={el.img} alt={el.singer} />
                        <a href='' title={el.singer}>{el.singer}</a>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <HeaderArtist />
            <DefaultTabs
                data={tabs}
                currentTab={currentTab}
                setCurrentTab={setcurrentTab}
            />
            <TabInside />
            <RenderArtist />
            <div className='flex-center'>
                <PaginationDefault
                    limit={3}
                    count={data.length}
                />
            </div>
        </div>
    )
}

export default ArtistPage