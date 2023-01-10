import { useRef, useState, useEffect } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import MoreOptions from '../components/MoreOptions';
import { clickInside } from '../hooks/useClickInside';

const Subbar = () => {
    const [openOption, setOpenOption] = useState(false);
    const [render, setRender] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const barRef = useRef<any>();
    const minibarRef = useRef<any>();
    const open = localStorage.getItem('open');

    const openBar = () => {
        barRef.current.style.transform = 'translateX(0)';
        // setIsOpen(true);
        localStorage.setItem('open', 'true');
    };

    const hideBar = () => {
        console.log('hide')
        barRef.current.style.transform = 'translateX(100%)';
        localStorage.removeItem('open');
    }

    const widthDevice = window.innerWidth;

    useEffect(() => {
        if (widthDevice > 1260) return;
        console.log(open)
        document.addEventListener('click', (event: any) => {
            event.stopPropagation();
            if (!open) return;
            if (barRef.current.contains(event.target)) return;
            hideBar();
        })
    }, [widthDevice, barRef, open]);
    console.log('render')

    return (
        <>
            <div ref={barRef} className='flex flex-col align-center justify-between container-subbar'>
                <div className='flex align-center flex-col header-subbar'>
                    <img
                        className='music-4u'
                        alt=''
                        src='https://stc-id.nixcdn.com/v12/static/media/default_player3.3709ec1a.jpg'
                    />
                    <span>Thưởng thức giai điệu theo cách riêng của bạn</span>
                    <button className='pointer btn-subbar'>Nghe nào</button>
                </div>
                <div className='flex align-center footer-subbar'>
                    <img
                        src='	
                https://stc-id.nixcdn.com/v12/static/media/default_song.dc43e7f4.png'
                        alt=''
                    />
                    <div className='flex flex-col content-footer-subbar'>
                        <span>Đang được nghe nhiều nhất</span>
                        <a href=''>V.A</a>
                    </div>
                </div>
            </div>
            <div ref={minibarRef} className='animate_animated animate__backInUp subbar-mini'>
                <div onClick={openBar} className='flex align-center pointer title-minibar'>
                    Nhac Cua Tui<span>-V.A</span>
                </div>
                <div className='flex align-center justify-between icon-group-minibar'>
                    <div className='flex align-center'>
                        <PauseIcon className='icon-minibar' />
                        <SkipNextIcon className='icon-minibar' />
                    </div>
                    <div className='flex align-center'>
                        <MoreVertIcon className='icon-minibar' onClick={() => setOpenOption(true)} />
                        <span className='line-minibar' />
                        <ArrowBackIosNewIcon onClick={openBar} className='icon-minibar' />
                    </div>
                </div>
                {
                    openOption && <MoreOptions
                        classOption='option-minibar'
                        showOption={openOption}
                        setShowOption={setOpenOption}
                    />
                }
            </div>
        </>
    )
}

export default Subbar;  