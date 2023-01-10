import { useState, useEffect, useRef } from 'react';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { clickInside } from '../hooks/useClickInside';

const MoreOptions = ({
    classOption,
    showOption,
    setShowOption
}: any) => {

    const optionRef = useRef<any>();
    const [render, setRender] = useState(false);

    const closeOption = () => {
        optionRef?.current?.classList.add('animate__zoomOut');
        setTimeout(() => {
            setShowOption(false)
        }, 300)
    }

    useEffect(() => {
        setRender(true);
        if (render && showOption) {
            clickInside(optionRef, closeOption);
            // setRender(false);
        }
    }, [optionRef, render, showOption])

    return (
        <div ref={optionRef} className={classOption ? `animate__animated animate__zoomIn ${classOption}` : 'animate__animated animate__zoomIn wrapper-options'}>
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

export default MoreOptions;