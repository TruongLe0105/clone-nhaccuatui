import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const CanHit = () => {
    const [showOption, setShowOption] = useState(false);

    return (
        <div>
            <h2 style={{ padding: 'var(--title_comp)' }}>Có Thể Hit</h2>
            <div className='flex wrapper-can-hit'>
                <div className='song-can-hit'>
                    <div className='flex-center box-second'>
                        <div className='overflow-black' />
                        <img
                            src='https://avatar-ex-swe.nixcdn.com/song/2022/08/31/6/3/7/9/1661926660620_300.jpg'
                            alt='song'
                            className='image-hit'
                        />
                        <PlayArrowIcon className='icon-play' />
                        <MoreVertIcon onClick={() => setShowOption(true)} className='pointer icon-more' />
                    </div>
                    <div className='special'>SPECIAL</div>
                    {
                        showOption && (
                            <div className='wrapper-options'>
                                <div className='flex align-center option'>
                                    <NotStartedIcon className='icon-options' />
                                    <span>Thêm vào chờ phát</span>
                                </div>
                                <div className='flex align-center option'>
                                    <AttachFileIcon className='icon-options' />
                                    <span>Sao chép link</span>
                                </div>
                                <div className='flex align-center option'>
                                    <MusicNoteIcon className='icon-options' />
                                    <span>Đi đến bài hát</span>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-col content-can-hit'>
                    <div>
                        <span>Bài hát: </span>
                        <span className='song-hit'>Chậm Lại</span>
                    </div>
                    <a href='' className='flex align-center'>
                        <span className='artist-img' />
                        <span className='artist-name'>Vũ</span>
                    </a>
                    <div>
                        <span>Ngày phát hành:</span>
                        <span className='realease-date'>25/08/2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CanHit;