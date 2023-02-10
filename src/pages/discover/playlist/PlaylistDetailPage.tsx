/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import HeaderDetail from './HeaderDetail';
import { data } from '../../../jsons/newMusicNewWeek';
import CanYouLike from '../../../components/CanYouLike';
import MoreOptions from '../../../components/MoreOptions';

const PlaylistDetailPage = () => {
    const [showOption, setShowOption] = useState(false);
    const [currentHover, setCurrentHover] = useState(0);

    const handleShowOptions = (index: number) => {
        setShowOption(true);
        setCurrentHover(index);
    }

    const TableHead = () => {
        return (
            <div className='table-head'>
                <span>Tiêu đề</span>
                <span>Nghệ sĩ</span>
                <span>Lượt nghe</span>
                <span>Thời gian</span>
            </div>
        )
    };

    const RenderListSong = () => {
        return (
            <div className='flex flex-col table-body'>
                {data.map((song: any, index: number) => (
                    <div key={index} className='pointer item-table'>
                        <div className='flex align-center title-table'>
                            <a
                                href=''
                                title={song.title}
                                className='name-song'
                                style={{ width: '85%' }}
                            >{song.title}</a>
                            <MoreVertIcon
                                onClick={() => handleShowOptions(index)}
                                className='pointer icon-more' />
                            {(showOption && currentHover === index) &&
                                <MoreOptions
                                    showOption={showOption}
                                    setShowOption={setShowOption}
                                    fullOptions={true}
                                />}
                        </div>
                        <div
                            className='name-song'
                            style={{ width: '85%' }}
                        >
                            {song.singers.map((singer: string, index: number) => (
                                <a
                                    href=''
                                    title={singer}
                                    key={index}
                                    className='singer-release'
                                >{singer}</a>
                            ))}
                        </div>
                        <div>
                            <i className="fa-solid fa-headphones"></i>
                            <span>{song.listen}</span>
                        </div>
                        <span style={{ textAlign: 'center' }}>{song.time}</span>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <HeaderDetail />
            <div style={{ padding: 'var(--title_comp)' }}>
                <h2>Danh Sách Bài Hát</h2>
                <TableHead />
                <RenderListSong />
            </div>
            <CanYouLike />
        </div>
    )
}

export default PlaylistDetailPage