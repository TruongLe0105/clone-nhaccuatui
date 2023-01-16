import { useState, useRef } from 'react';

const NewRelease = ({ data }: any) => {
    const [currentItem, setCurrentItem] = useState(data[0]);
    const { img, title, singer, img_singer, day_release } = currentItem;

    const arrowRef = useRef<any>();

    const handleHoverCard = (event: any, item: any, index: number) => {
        const arrowNode: any = document.getElementById('arrow-release');
        const clientX = event.target.getBoundingClientRect().left;
        const halfWidth = event.target.clientWidth / 2;
        const clientArrow = clientX + halfWidth;

        if (arrowNode) {
            arrowNode.style.left = `${clientArrow - 232}px`;
        }
        setCurrentItem(item);
    };

    return (
        <div className='new-release'>
            <h2 style={{ padding: 'var(--title_comp)' }}>Mới Phát Hành</h2>
            <div className='flex banner-release'>
                <div className='represent-img' >
                    <img src={img} alt='' />
                </div>
                <div className='flex flex-col content-release'>
                    <span>{title}</span>
                    <div className='flex flex-row' style={{ margin: '1rem 0' }}>
                        <div className='flex align-center img-singers'>
                            {img_singer?.map((img: any, index: number) => (
                                <a key={index} title={singer[index]} href='' className='flex align-center img-singer'>
                                    <img key={index} src={img} alt='' />
                                </a>
                            ))}
                        </div>
                        {singer?.map((el: any, index: number) => (
                            <a key={index} href='' className='singer-release'>{el}</a>
                        ))}
                    </div>
                    <div className='flex flex-row align-center time-release'>
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>Ngày phát hành: {day_release}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between relative list-new-release'>
                {data.map((item: any, index: number) => (
                    <div
                        key={index}
                        className='song-can-hit relative card-new-release'
                        onMouseEnter={(event) => handleHoverCard(event, item, index)}
                    >
                        <div className='flex-center box-second'>
                            <div className='overflow-black' />
                            <img
                                src={item ? item.img : 'https://avatar-ex-swe.nixcdn.com/song/2022/08/31/6/3/7/9/1661926660620_300.jpg'}
                                alt='song'
                                className='image-hit'
                            />
                            <i className='fa-solid fa-play icon-play icon-play-release'></i>
                        </div>
                        <div className='arrow-release' id='arrow-release' ref={arrowRef} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewRelease;