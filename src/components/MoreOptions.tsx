import { useState, useEffect, useRef, FC } from 'react';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { clickInside } from '../hooks/useClickInside';
import { OptionsCard } from '../types';

const MoreOptions: FC<OptionsCard> = (props) => {
    const { classOption, showOption, setShowOption, isPlayList } = props;

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
        }
    }, [optionRef, render, showOption]);

    const renderOption = () => {
        if (isPlayList) {
            return (
                <div className='flex align-center option'>
                    <AttachFileIcon className='icon-options' />
                    <span>Sao chép link</span>
                </div>
            )
        } else {
            return (
                <>
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
                </>
            )
        }
    }

    return (
        <div ref={optionRef} className={classOption ? `animate__animated animate__zoomIn ${classOption}` : 'animate__animated animate__zoomIn wrapper-options'}>
            {renderOption()}
        </div>
    )
}

export default MoreOptions;