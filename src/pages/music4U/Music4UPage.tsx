import { useState } from 'react';

import ButtonDefault from '../../components/ButtonDefault';
import LoginForm from '../../components/forms/LoginForm';
import useAppContext from '../../hooks/useAppContext';

const Music4UPage = () => {
    const { setOpenFormLogin } = useAppContext();

    return (
        <div
            className='flex'
            style={{ padding: '2rem 3.2rem' }}
        >
            <div
                className='flex flex-col'
                style={{
                    width: '25rem',
                    marginRight: '3rem'
                }}
            >
                <div className='first-bg' />
                <div className='second-bg' />
                <img
                    src='https://stc-id.nixcdn.com/v12/static/media/default_player1.3d52ca3d.jpg'
                    alt='img'
                />
            </div>
            <div>
                <span>Playlist: <span>Music 4U</span></span>
                <p>Đăng nhập ngay để khám phá những ca khúc hay nhất được chọn lọc dành riêng cho bạn.</p>
                <div onClick={() => setOpenFormLogin(true)}>
                    <ButtonDefault
                        title='Đăng nhập ngay'
                        buttonClass='pointer button-rank'
                    />
                </div>
            </div>
        </div>
    )
}

export default Music4UPage