import { useState } from 'react';

import { data } from '../../jsons/songs';
import { LinkSingers, LinkSong } from '../Link';
import MoreOptions from '../MoreOptions';


const Song = () => {
    const [showOption, setShowOption] = useState(false);
    const [active, setActive] = useState(0);

    const handleShowOption = (index: any) => {
        setShowOption(true);
        setActive(index);
    }

    return (
        <div style={{ padding: 'var(--title_comp)' }}>
            <h2>Bài Hát</h2>
            <div className='flex align-center justify-between wrapper-card-song'>
                {data.map((song: any, index: number) => (
                    <div key={index} className='flex align-center justify-between  relative item-card-song'>
                        <div className='flex align-center' style={{ width: '72%' }}>
                            <img src={song.img} alt='' />
                            <div className='flex flex-col justify-center' style={{ marginLeft: '8px', width: '75%' }}>
                                <LinkSong el={song} index={index} />
                                <LinkSingers el={song.singers} index={index} />
                            </div>
                        </div>
                        <div className='flex flex-col align-center symbol-card'>
                            {song.vip ? <i className="fa-solid fa-crown"></i> : <i className="fa-thin fa-crown"></i>}
                            <div className='flex flex-row align-center symbol-detail'>
                                <i className="fa-solid fa-headphones"></i>
                                <span>{song.listens}</span>
                            </div>
                        </div>
                        <i
                            onClick={() => handleShowOption(index)}
                            className='fa-solid fa-ellipsis-vertical flex-center icon-more-chart icon-more-song'
                        ></i>
                        {
                            (showOption && active === index) && (
                                <MoreOptions
                                    showOption={showOption}
                                    setShowOption={setShowOption}
                                    classOption='options-song'
                                />
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Song;