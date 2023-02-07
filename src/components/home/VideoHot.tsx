

import React from 'react';
import CardItemMain from '../CardItemMain';
import { LinkSingers, LinkSong } from '../Link';

const data = [
    {
        img: 'https://avatar-ex-swe.nixcdn.com/mv/2023/01/10/3/6/5/3/1673324701790_640.jpg',
        title: 'Tết Tới Tấp',
        singers: ['Vương Thiên Tuấn', 'Nguyễn Đình Long'],
        time: '03:40',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/mv/2023/01/16/6/8/e/d/1673853724119_640.jpg',
        title: 'Đợi Chờ Đừng Cáu',
        singers: ['Phan Mạnh Quỳnh', 'Hoàng Thùy Linh'],
        time: '05:49',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/mv/2023/01/16/6/8/e/d/1673834776322_640.jpg',
        title: 'Âm Nhạc (Lyric Video)',
        singers: ['Hustlang HBO'],
        time: '05:41',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/mv/2023/01/13/9/9/b/b/1673580486877_640.jpg',
        title: 'Flowers',
        singers: ['Miley Cyrus'],
        time: '03:21',
    },
    {
        img: '	https://avatar-ex-swe.nixcdn.com/mv/2023/01/11/d/0/a/e/1673409963368_640.jpg',
        title: 'Hoding Out of a Hero',
        singers: ['Adam Lambert'],
        time: '03:40',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/mv/2023/01/10/3/6/5/3/1673324701790_640.jpg',
        title: 'Shooting Star',
        singers: ['SHAUN'],
        time: '04:06',
    },
]

const VideoHot = () => {
    return (
        <div style={{ padding: 'var(--title_comp)' }}>
            <h2>Video Hot</h2>
            <div className='flex align-centern justify-between wrapper-video'>
                {data.map((item: any, index: number) => (
                    <div key={index} className='wrapper-card-video'>
                        <CardItemMain
                            isPlayList={true}
                            item={item}
                            classCard='card-video'
                            time={item.time}
                        />
                        <div style={{ padding: '4px 0' }}>
                            <LinkSong el={item} index={index} />
                            <LinkSingers el={item.singers} index={index} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoHot