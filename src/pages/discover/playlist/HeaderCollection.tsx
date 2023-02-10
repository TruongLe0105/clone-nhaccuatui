import React from 'react';

import { categories, mood, scene, topic } from '../../../jsons/collection';

const HeaderCollection = () => {
    const Tag = ({
        data,
        collection
    }: any) => {
        return (
            <div>
                <h3>{collection}</h3>
                <div className='flex flex-col'>
                    {data.map((el: string, index: number) => (
                        <div key={index} style={{ marginBottom: '5px' }} className='flex align-center'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a title={el}>{el}</a>
                        </div>
                    ))}
                    <div className='flex align-center'>
                        <i className="fa-solid fa-angle-right"></i>
                        <a>Xem thêm...</a>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className='flex justify-between header-collection'>
            <Tag
                data={categories}
                collection='Thể loại'
            />
            <Tag
                data={mood}
                collection='Tâm trạng'
            />
            <Tag
                data={scene}
                collection='Khung cảnh'
            />
            <Tag
                data={topic}
                collection='Chủ đề'
            />

        </div>
    )
}

export default HeaderCollection;