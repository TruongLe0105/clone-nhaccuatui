import { useState } from 'react';

import { Button } from "../components/button";

const topVN = [
    {
        top: 1,
        title: 'Quả Phụ Tướng',
        singer: ['Dung Hoàng Phạm'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/28/a/4/7/d/1672195948068_300.jpg',
    },
    {
        top: 2,
        title: 'Để tôi ôm em bằng giai điệu này',
        singer: ['Kai Đinh, MIN, GRAY D'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/15/0/3/9/2/1671119733875_300.jpg',
    },
    {
        top: 3,
        title: 'Ngủ Một Mình (Tình Rất Tình)',
        singer: ['HIEUTHUHAI', 'Negav', 'Kewtiie'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/12/2/8/0/d/1670833179694_300.jpg',
    },
]

const topUS_UK = [
    {
        top: 1,
        title: 'Dreamers (Music From The FIFA World Cup Qatar 2022 Official Soundtrack)',
        singer: ['Jung Kook (BTS)', 'FIFA Sound'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/11/20/d/8/8/7/1668950510671_300.jpg',
    },
    {
        top: 2,
        title: 'Pano',
        singer: ['Zack Tabudlo'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/29/e/e/f/b/1672296333770_300.jpg',
    },
    {
        top: 3,
        title: 'golden hour',
        singer: ['JVKE#'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/13/a/f/7/3/1670903992722_300.jpg',
    },
]

const topKorean = [
    {
        top: 1,
        title: 'OMG',
        singer: ['NewJeans'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2023/01/03/5/6/a/9/1672714168763_300.jpg',
    },
    {
        top: 2,
        title: 'Ditto',
        singer: ['NewJeans'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/20/9/d/c/4/1671497656255_300.jpg',
    },
    {
        top: 3,
        title: 'Shut Down',
        singer: ['BLACKPINK'],
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/09/16/0/2/1/c/1663301881856_300.jpg',
    },
]

const RankTable = () => {

    const CardRank = ({ background, country, data }: any) => {
        const [currentInfo, setCurrentInfo] = useState(data[0]);
        const [currentIndex, setCurrentIndex] = useState(0);

        const handleHover = (index: number) => {
            setCurrentInfo(data[index]);
            setCurrentIndex(index);
        }

        return (
            <div
                className='card-rank'
            >
                <div
                    style={{ backgroundImage: `url(${background})` }}
                    className='header-rank'>
                    <span className='flex justify-center'>{country}</span>
                    <div className='flex align-center'>
                        {data.map((item: any, index: number) => (
                            <div onMouseOver={() => handleHover(index)} key={index} className="flex-center wrapper-img-rank">
                                <img src={item.img} alt='' />
                                <div className='bg-dark' />
                                <i className='fa-solid fa-play icon-play' />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ padding: '3rem 2.5rem 0 2.5rem' }}>
                    <a href='' title={currentInfo.title} className='name-song' style={{ fontSize: '1.6rem' }}>{currentInfo.title}</a>
                    <div className='name-song '>
                        {currentInfo.singer.map((el: any, index: number) => (
                            <a href='' title={el} key={index} className='singer-release'>{el}</a>
                        ))}
                    </div>
                </div>
                <div className='number-rank'>#{currentIndex + 1}</div>
                <Button title='Xem tất cả' />
            </div>
        )
    }

    return (
        <div className='container-rank'>
            <h2>BXH Bài Hát</h2>
            <div className='flex align-center justify-between'>
                <CardRank
                    data={topVN}
                    country='Việt Nam'
                    background='https://stc-id.nixcdn.com/v12/static/media/bg_top_1.03d0fd3f.jpg'
                />
                <CardRank
                    data={topUS_UK}
                    country='Âu Mỹ'
                    background='https://stc-id.nixcdn.com/v12/static/media/bg_top_2.9eb21c0e.jpg'
                />
                <CardRank
                    data={topKorean}
                    country='Hàn Quốc'
                    background='https://stc-id.nixcdn.com/v12/static/media/bg_top_3.a057d449.jpg'
                />
            </div>
        </div>
    )
}

export default RankTable;