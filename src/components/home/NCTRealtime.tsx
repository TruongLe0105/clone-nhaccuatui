import { useState, useRef } from 'react';

import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Label } from 'recharts';
import { Button } from '../button';
import MoreOptions from '../MoreOptions';

const data = [
    {
        "time": "09:00",
        "top1": 3200,
        "top2": 3100,
        "top3": 2200
    },
    {
        "halfTime": "10:00",
        "top1": 2500,
        "top2": 3100,
        "top3": 2200
    },
    {
        "time": "11:00",
        "top1": 2900,
        "top2": 2400,
        "top3": 2200
    },
    {
        "time": "13:00",
        "top1": 2600,
        "top2": 2500,
        "top3": 2300
    },
    {
        "time": "15:00",
        "top1": 2000,
        "top2": 1800,
        "top3": 1600
    },
    {
        "time": "17:00",
        "top1": 2500,
        "top2": 1900,
        "top3": 1600
    },
    {
        "time": "19:00",
        "top1": 2500,
        "top2": 1900,
        "top3": 1600
    },
    {
        "time": "21:00",
        "top1": 1200,
        "top2": 1100,
        "top3": 963
    },
    {
        "time": "23:00",
        "top1": 864,
        "top2": 705,
        "top3": 633
    },
    {
        "time": "01:00",
        "top1": 1400,
        "top2": 1200,
        "top3": 891
    },
    {
        "time": "03:00",
        "top1": 2000,
        "top2": 1700,
        "top3": 1200
    },
    {
        "time": "05:00",
        "top1": 3200,
        "top2": 2900,
        "top3": 2100
    },
    {
        "time": "07:00",
        "top1": 2600,
        "top2": 2300,
        "top3": 2000
    },
];

const listSong = [
    {
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/08/10/4/8/b/1/1660104031203_300.jpg',
        title: 'Waiting For You',
        singer: ['Mono', 'Onion'],
        time: '04:25',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/song/2022/12/28/a/4/7/d/1672195948068_300.jpg',
        title: 'Quả Phụ Tướng',
        singer: ['Dung Hoàng Phạm'],
        time: '03:29',
    },
    {
        img: 'https://avatar-ex-swe.nixcdn.com/song/2023/01/12/e/2/4/d/1673508699888_300.jpg',
        title: 'Ghé Vào Tai',
        singer: ['UMIE', 'Freaky', 'Hổ'],
        time: '02:35',
    },
];

const NCTRealtime = () => {
    const [active, setActive] = useState(0);
    const [showOption, setShowOption] = useState(false);

    const backgroundRef = useRef<any>();

    const handleHover = (event: any, index: number) => {
        if (index === 0) {
            backgroundRef.current.style.background = 'linear-gradient(132deg, rgb(115, 93, 142) 0.00%, rgb(58, 33, 86) 100.00%)'
        } else if (index === 1) {
            backgroundRef.current.style.background = 'linear-gradient(323deg, rgb(3, 148, 108) 0.00%, rgb(33, 35, 34) 100.00%)'
        } else {
            backgroundRef.current.style.background = 'linear-gradient(0deg, rgb(65, 80, 95) 0.00%, rgb(36, 37, 38) 100.00%)'
        }
    }

    const handleShowOption = (index: number) => {
        setActive(index);
        setShowOption(true);
    }

    const CardChart = ({ index, item }: any) => {

        return (
            <div
                onMouseOver={(event) => handleHover(event, index)}
                className='flex align-center justify-between card-realtime'
                style={{
                    // background: active === index ? 'var(--cl_border)' : ''
                }}
            >
                <div className='bg-card-chart' />
                <span>{index + 1}</span>
                <div className='flex align-center item-card-chart'>
                    <img src={item.img} alt='' />
                    <span>{item.title}</span>
                </div>
                <div className='flex align-center singers-chart'>
                    {item.singer.map((el: any, index: number) => (
                        <a href='' key={index} title={el} className='singer-release'>
                            {el}
                        </a>
                    ))}
                </div>
                <span style={{ width: '15%' }}>{item.time}</span>
                <i onClick={() => handleShowOption(index)} className='fa-solid fa-ellipsis-vertical flex-center icon-more-chart'></i>
                {
                    (showOption && active === index) && <MoreOptions
                        showOption={showOption}
                        setShowOption={setShowOption}
                        classOption='option-chart'
                    />
                }
            </div>
        )
    }

    return (
        <div className='realtime-container'>
            <h2>NCT Realtime</h2>
            <div className='wrapper-charts'>
                <img
                    src="https://thumbs.dreamstime.com/b/listen-to-music-clipping-path-xxl-1899245.jpg"
                    alt="img"
                    className='bg-image-chart'
                />
                <div ref={backgroundRef} className='bg-first-chart' />
                <div className='bg-second-chart' />
                <div className='flex align-center justify-between heading-chart'>
                    <div className='flex align-center'>
                        <span>#NCTChart</span>
                        <span className='date-chart'>16/01/2022</span>
                    </div>
                    <div className='flex-center pointer icon-play-chart'>
                        <i className='fa-solid fa-play flex-center' />
                    </div>
                </div>
                <AreaChart
                    width={642}
                    height={250}
                    data={data}
                    className='charts-realtime'
                >
                    <XAxis dataKey='time' axisLine={false} tickLine={false} tickMargin={16} />
                    <YAxis display='none' width={20} />
                    <CartesianGrid vertical={false} strokeDasharray="5 5" />
                    <Tooltip
                    />
                    <Area type="monotone" dataKey="top1" stroke="#ebde24" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="top2" stroke="#27bfda" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="top3" stroke="#33da27" fillOpacity={1} fill="url(#colorAmt)" />
                </AreaChart>
                {listSong.map((item: any, index: number) => (
                    <CardChart key={index} index={index} item={item} />
                ))}
                <Button title='Xem thêm' />
            </div>
        </div>
    )
}

export default NCTRealtime;