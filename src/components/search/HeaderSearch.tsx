
import SearchIcon from '@mui/icons-material/Search';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

const HeaderSearch = () => {

    const list = ['tyga', 'hieu thu 2', 'truong thu 1', 'clq gi v', 'dit me tuyet voi', 'superman', 'ironman', 'cai gi the!', 'wonder woman', 'doctor teach']

    return (
        <div className='flex justify-between header-search'>
            <div className='flex align-center relative wrapper-search'>
                <SearchIcon className='header-search-icon' />
                <input type='text' placeholder='Tìm kiếm ...' className='input-search' />
            </div>
            <Swiper
                direction={"vertical"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // loop={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {list.map((item, index) => (
                    <SwiperSlide key={index} className='flex align-center justify-between swiper-slide'>
                        <div style={{
                            color: 'var(--cl_hover)'
                        }}>
                            <span>{index + 1}.</span>
                            <span style={{ marginLeft: '1rem', textTransform: 'capitalize' }}>{item}</span>
                        </div>
                        <span style={{ color: '#FFC100', fontSize: '1.1rem' }}>New</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeaderSearch;