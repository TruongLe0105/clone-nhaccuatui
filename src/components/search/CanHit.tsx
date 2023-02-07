import { useState } from 'react';
import CardItemMain from '../CardItemMain';

const CanHit = () => {

    return (
        <div>
            <h2 style={{ padding: 'var(--title_comp)' }}>Có Thể Hit</h2>
            <div className='flex wrapper-can-hit'>
                <CardItemMain fullOptions={true} />
                <div className='flex flex-col content-can-hit'>
                    <div>
                        <span>Bài hát: </span>
                        <span className='song-hit'>Chậm Lại</span>
                    </div>
                    <a href='' className='flex align-center'>
                        <span className='artist-img' />
                        <span className='artist-name'>Vũ</span>
                    </a>
                    <div>
                        <span>Ngày phát hành:</span>
                        <span className='realease-date'>25/08/2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CanHit;