
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

const NCTRealtime = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
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
    ]

    const CardChart = ({ index, item }: any) => {

        return (
            <div className='flex align-center justify-between card-realtime'>
                <span>{index}</span>
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
                <i className='fa-solid fa-ellipsis-vertical flex-center icon-more-chart'></i>
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
                <div className='bg-first-chart' />
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
                <AreaChart width={552} height={250} data={data}
                    className='charts-realtime'
                >
                    <XAxis dataKey="name" />
                    {/* <YAxis /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#ebde24" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#27bfda" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="amt" stroke="#33da27" fillOpacity={1} fill="url(#colorAmt)" />
                </AreaChart>
                {listSong.map((item: any, index: number) => (
                    <CardChart key={index} index={index} item={item} />
                ))}
                <button className='flex btn-chart'>Xem thêm</button>
            </div>
        </div>
    )
}

export default NCTRealtime;