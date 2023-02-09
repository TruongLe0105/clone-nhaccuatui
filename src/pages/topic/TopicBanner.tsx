import { useState } from 'react';

const BannerTopic = () => {
    const [expand, setExpand] = useState(false);

    const text = 'EDM (Electronic Dance Music) hay còn gọi là nhạc điện tử thường hát rất ít, có khi là không hát. Nhạc điện tử với âm thanh chủ đạo là âm thanh điện tử được cấu thành và xây dựng bằng những nhạc cụ điện tử như đàn Synthersizer, Trống điện kết hợp với máy hòa âm (sequencers) tất cả đều tập trung làm sao để có thể khai thác được các âm thanh, âm sắc đặc biệt nhất của những nhạc cụ này. Mời bạn cùng phiêu với những Playlist tuyển chọn sôi động nhất tại NhacCuaTui.Com.'

    return (
        <div style={{ width: '100%' }}>
            <img
                src='https://avatar-ex-swe.nixcdn.com/topic/mobile/2020/08/21/b/d/3/8/1597979709743.jpg'
                alt='img'
                style={{ width: '100%' }}
            />
            <div className='text-topic'>
                <p>{expand ? text : text.slice(0, 200) + '...'}</p>
                {
                    expand ? (
                        <div onClick={() => setExpand(false)} className='flex align-center pointer'>
                            <i className="fa-solid fa-caret-up"></i>
                            <span>Thu gọn</span>
                        </div>
                    ) : (
                        <div onClick={() => setExpand(true)} className='flex align-center pointer'>
                            <i className="fa-solid fa-caret-down"></i>
                            <span>Xem thêm</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BannerTopic;