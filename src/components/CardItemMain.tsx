import { useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreOptions from './MoreOptions';

const CardItemMain = ({ isPlayList, item, classCard, time }: any) => {
    const [showOption, setShowOption] = useState(false);

    return (
        <div className={classCard ? `song-can-hit ${classCard}` : 'song-can-hit'}>
            <div className='flex-center box-second'>
                <div className='overflow-black' />
                <img
                    src={item ? item.img : 'https://avatar-ex-swe.nixcdn.com/song/2022/08/31/6/3/7/9/1661926660620_300.jpg'}
                    alt='song'
                    className='image-hit'
                />
                <i className='fa-solid fa-play icon-play'></i>
                <MoreVertIcon
                    onClick={() => setShowOption(true)}
                    className='pointer icon-more' />
            </div>
            {!isPlayList && <div className='special'>SPECIAL</div>}
            {time && <div className='time-card'>{time}</div>}
            {
                showOption && (
                    <MoreOptions
                        showOption={showOption}
                        setShowOption={setShowOption}
                        isPlayList={isPlayList}
                    />
                )
            }
        </div>
    )
}

export default CardItemMain;