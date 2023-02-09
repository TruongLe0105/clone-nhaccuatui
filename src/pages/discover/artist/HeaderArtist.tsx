import React from 'react';

const listArtist = ['Hana Cẩm Tiên', 'UMIE', 'O.lew (Việt Nam)', 'Khoa (Nguyễn Khoa)', 'Maser', 'Dung Hoàng Phạm', 'Lê Dương Bảo Lâm', '9C Media', 'Teayang', 'Freaky'];

const HeaderArtist = () => {
    return (
        <div className='header-artist'>
            <div className='flex align-center heading'>
                <h2>Nghệ Sỹ Trending</h2>
                <span>Cập nhật ngày:</span>
                <span>06/02/2023</span>
            </div>
            <div className='flex align-center content-artist'>
                <img src='https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/12/27/6/4/5/6/1672123728522_300.jpg' alt='img' />
                <div className='flex flex-col justify-center wrapper-artist'>
                    {listArtist.map((artist: string, index: number) => (
                        <div key={index} className='flex'>
                            <span>{index + 1}</span>
                            <span>{artist}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderArtist