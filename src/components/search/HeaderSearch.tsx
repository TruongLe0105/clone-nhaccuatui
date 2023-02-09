
import SearchIcon from '@mui/icons-material/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const HeaderSearch = () => {

    const list = ['Hana Cẩm Tiên', 'UMIE', 'O.lew (Việt Nam)', 'Khoa (Nguyễn Khoa)', 'Maser', 'Dung Hoàng Phạm', 'Lê Dương Bảo Lâm', '9C Media', 'Teayang', 'Freaky'];

    const TrendingArtist = () => {

        return (
            <div className='flex-col justify-between trending-artist'>
                <span className='flex-center header-swiper'>Nghệ sĩ trending</span>
                {list.map((item, index) => (
                    <div key={index} className='flex flex-row align-center justify-between wrapper-content'>
                        <div>
                            <span>{index + 1}.</span>
                            <span style={{ marginLeft: '1rem' }}>{item}</span>
                        </div>
                        <span style={{ color: '#FFC100', fontSize: '1.1rem' }}>New</span>
                    </div>
                ))}
                <span className='flex-center btn-seemore'>Xem thêm</span>
            </div>
        )
    }

    return (
        <div className='flex justify-between header-search'>
            <div className='flex align-center relative wrapper-search'>
                <SearchIcon className='header-search-icon' />
                <input type='text' placeholder='Tìm kiếm ...' className='input-search' />
            </div>
            <div className='wrapper-slide'>
                <Swiper
                    direction="vertical"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    slidesPerView={1}
                >
                    {list.map((item, index) => (
                        <SwiperSlide key={index} className='flex align-center justify-between'>
                            <div style={{
                                color: 'var(--cl_hover)'
                            }}>
                                <span>{index + 1}.</span>
                                <span style={{ marginLeft: '1rem' }}>{item}</span>
                            </div>
                            <span style={{ color: '#FFC100', fontSize: '1.1rem' }}>New</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <TrendingArtist />
            </div>
        </div>
    )
}

export default HeaderSearch;