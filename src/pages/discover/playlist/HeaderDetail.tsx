import { useState } from 'react'
import { HiddenContent, HiddenContentMain } from '../../../components/HiddenContent'

const icons = [
    {
        icon: <i className="fa-solid fa-cloud-arrow-down"></i>,
        title: 'Thêm vào cloud'
    },
    {
        icon: <i className="fa-solid fa-download"></i>,
        title: 'Tải về'
    },
    {
        icon: <i className="fa-solid fa-share-nodes"></i>,
        title: 'Chia sẻ'
    }
]
const HeaderDetail = () => {
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState<any>();

    const keywords = [
        'Nhạc Trẻ', 'Remix Việt', 'Rap Việt', 'Indie Việt', 'Nhạc Hot Tháng', 'Top 100', 'Tình Yêu'
    ]
    return (
        <div>
            <div className='flex algn-center'>
                <div className='banner-detail-playlist'>
                    <div className='first-bg' />
                    <div className='second-bg' />
                    <img src='https://avatar-ex-swe.nixcdn.com/playlist/2023/01/30/5/2/d/7/1675066649965_500.jpg' alt='img' />
                    <div
                        className='flex-center btn-play-all'
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <i className='fa-solid fa-play icon-play icon-play-playlist'></i>
                        {hover && <HiddenContent content='Phát tất cả' />}
                    </div>
                </div>
                <div className='flex flex-col content-header-playlist'>
                    <div className='flex align-center'>
                        <span>Playlist:</span>
                        <h3>Tuần Mới Nhạc Mới</h3>
                    </div>
                    <div className='flex'>
                        <img className='pointer' src='https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/18/e/4/e/c/1597723219000_300.jpg' alt='img' />
                        <a href=''>V.A</a>
                    </div>
                    <span style={{ marginTop: '1rem' }}>14/12/2022</span>
                    <p>Hãy cùng Nhaccuatui cập nhật tất tần tật ngay những ca khúc mới nhất vừa được phát hành trong thời gian này nhé!</p>
                    <div className='flex'>
                        <span>Tags:</span>
                        <div className='flex wrapper-hashtag'>
                            {keywords.map((key: string, index: number) => (
                                <div key={index} className='flex align-center justify-between hashtag hashtag-playlist' style={{ margin: '0 2rem .5rem 0' }}>
                                    <span>{key}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between create-by'>
                <div className='flex'>
                    <img src='https://avatar-ex-swe.nixcdn.com/avatar/2020/06/04/d/9/e/e/1591240258899.jpg' alt='img' />
                    <div className='flex flex-col'>
                        <span>Tạo bởi:</span>
                        <span>GOODMUSIC4BADDAYS</span>
                    </div>
                </div>
                <div className='flex align-center'>
                    {icons.map((el: any, index: number) => (
                        <div
                            key={index}
                            onMouseEnter={() => {
                                setShow(true)
                                setActive(index)
                            }}
                            onMouseLeave={() => {
                                setShow(false)
                                setActive(-1)
                            }}
                            style={{ position: 'relative' }}
                        >
                            {el.icon}
                            {(show && active === index) && <HiddenContentMain content={el.title} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderDetail