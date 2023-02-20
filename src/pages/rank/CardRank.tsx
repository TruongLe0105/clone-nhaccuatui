import { useState, useRef, useEffect } from 'react';

import MoreOptions from '../../components/MoreOptions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LinkSingers } from '../../components/Link';
import { HistoryRank } from './ChartRankPage';

const CardRank = ({
    data,
    classCard,
    showMore,
}: any) => {
    const [showOptions, setShowOption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        const activeItem = document.getElementById(`card ${index}`);
        activeItem?.classList.toggle('active-card');

    }

    return (
        data.map((el: any, index: number) => (
            <div
                key={index}
                id={`card ${index}`}
                className={classCard ? `flex align-center wrapper-item-rank ${classCard}` : 'flex align-center wrapper-item-rank'}
            >
                <span className='flex-center'>{index + 1}</span>
                <div className='flex flex-col w-100  relative item-rank'>
                    <div className='flex align-center justify-between'>
                        <div className='flex align-center'>
                            <img src={el.img} alt={el.song} />
                            <div>
                                <a title={el.title} className='name-song' style={{ color: 'white' }}>{el.title}</a>
                                <LinkSingers el={el.singers} />
                            </div>
                        </div >
                        <MoreVertIcon
                            onClick={() => {
                                setShowOption(true)
                                setActiveIndex(index)
                            }}
                            className={(showOptions && activeIndex === index) ? 'pointer icon-more icon-more-rank' : 'pointer icon-more'}
                        />
                        {
                            showMore && (
                                <div className='pointer arrow-rank' onClick={() => handleClick(index)} >
                                    <i className="fa-solid fa-regular fa-chevron-down"></i>
                                </div>
                            )
                        }
                    </div>
                    <div className='content-hidden-rank'>
                        <HistoryRank />
                    </div>
                </div>
                {(showOptions && activeIndex === index) && (
                    <MoreOptions
                        showOption={showOptions}
                        setShowOption={setShowOption}
                        fullOptions={true}
                        classOption='options-song options-song-rank'
                    />
                )}
            </div >
        ))
    )
}

export default CardRank