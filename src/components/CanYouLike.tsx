import React from 'react';

import { data } from '../jsons/canyoulike';
import CardItemMain from './CardItemMain';
import { LinkSingers, LinkSong } from './Link';

const CanYouLike = () => {
    return (
        <div className='can-you-like'>
            <h2 style={{ margin: '2rem 0' }}>Có Thể Bạn Cũng Thích</h2>
            <div className='card-primary'>
                {data.map((el: any, index: number) => (
                    <div key={index} className='flex flex-col'>
                        <div className='first-bg' />
                        <div className='second-bg' />
                        <CardItemMain
                            isPlayList={true}
                            item={el}
                            classCard='card-item-primary'
                        />
                        <div style={{ marginTop: '5px' }}>
                            <LinkSong el={el} />
                        </div>
                        <LinkSingers el={el.singers} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CanYouLike;