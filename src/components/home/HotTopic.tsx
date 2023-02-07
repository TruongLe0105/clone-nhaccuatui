import React from 'react';

const data = [
    '	https://avatar-ex-swe.nixcdn.com/topic/image-1440/2020/06/19/e/d/d/3/1592557836058_640.png',
    'https://avatar-ex-swe.nixcdn.com/topic/image-1440/2020/06/19/e/d/d/3/1592558655656_640.png',
    'https://avatar-ex-swe.nixcdn.com/topic/image-1440/2022/12/05/4/a/8/9/1670222076742_640.png',
    '	https://avatar-ex-swe.nixcdn.com/topic/image-1440/2020/09/04/e/3/7/5/1599203331252_640.png'
]

const HotTopic = () => {
    return (
        <div style={{ padding: 'var(--title_comp)' }}>
            <h2>Chủ Đề Hot</h2>
            <div className='flex align-center justify-between wrapper-topic'>
                {data.map((el: any, index: number) => (
                    <div key={index} className='relative item-card-topic'>
                        <div className='flex-center box-second'>
                            <div className='overflow-black' />
                            <img
                                src={el}
                                alt='song'
                                className='image-hit'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotTopic;