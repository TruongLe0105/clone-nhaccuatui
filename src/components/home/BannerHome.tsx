import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { banner } from "../../jsons/banner";


const BannerHome = () => {

    return (
        <div className='swrapper-banner'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                pagination={{
                    type: 'bullets',
                    clickable: true
                }}
                cardsEffect={{
                    slideShadows: false,
                    perSlideRotate: 1
                }}
                loop={true}
                effect={'cards'}
                modules={[Autoplay, Pagination, Navigation, EffectCards]}
                className="swiper-banner"
                slidesPerView={1}
                spaceBetween={0}
            >
                {
                    banner.map((el, index) => (
                        <SwiperSlide key={index} className='flex swiper-item-banner pointer'>
                            <img src={el} alt='' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='justify-between icons-banner'>
                <button className='swiper-button-prev'>
                    <ArrowBackIosNewIcon className='icon-banner' />
                </button>
                <button className='swiper-button-next'>
                    <ArrowForwardIosIcon className='icon-banner' />
                </button>
            </div>
        </div>
    )
}

export default BannerHome;