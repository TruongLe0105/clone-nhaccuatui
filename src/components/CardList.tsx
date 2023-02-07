import { useState, FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardListProp } from '../types';
import CardItemMain from './CardItemMain';
import { LinkSong } from './Link';

const CardList: FC<CardListProp> = (props) => {
    const { title, data, comp } = props;
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);

    const handleCLick = (action: string) => {
        if (action === 'prev') {
            setPrev(false);
            setNext(true);
        } else {
            setPrev(true);
            setNext(false);
        }
    }

    return (
        <div className='welcome-spring'>
            <div className='flex align-center justify-between'>
                <h2>{title}</h2>
                <div className='flex align-center'>
                    <i
                        className={`fa-solid fa-chevron-left pointer icon-card swiper-${comp}-prev`}
                        onClick={() => handleCLick('prev')}
                        style={{
                            color: prev ? '' : 'var(--cl_icon)',
                            cursor: prev ? 'pointer' : 'default'
                        }}
                    ></i>
                    <i
                        className={`fa-solid fa-chevron-right pointer icon-card swiper-${comp}-next`}
                        onClick={() => handleCLick('next')}
                        style={{
                            color: next ? '' : 'var(--cl_icon)',
                            cursor: next ? 'pointer' : 'default'
                        }}
                    ></i>
                </div>
            </div>
            <Swiper
                className='flex align-center justify-between wrapper-cards'
                navigation={{
                    nextEl: `.swiper-${comp}-next`,
                    prevEl: `.swiper-${comp}-prev`
                }}
                modules={[Navigation]}
                allowTouchMove={false}
            >
                <SwiperSlide className='flex align-center justify-between'>
                    {
                        data.slice(0, 4).map((el: any, index: number) => (
                            <div key={index} className='flex flex-col' style={{ width: '23%' }}>
                                <CardItemMain
                                    isPlayList={true}
                                    item={el}
                                    classCard='card-spring'
                                />
                                <LinkSong el={el} index={index} />
                            </div>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide className='flex align-center justify-between'>
                    {
                        data.slice(3,).map((el: any, index: number) => (
                            <div key={index} className='flex flex-col' style={{ maxWidth: '23%' }}>
                                <CardItemMain
                                    isPlayList={true}
                                    item={el}
                                    classCard='card-spring'
                                />
                                <LinkSong el={el} index={index} />
                            </div>
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardList;