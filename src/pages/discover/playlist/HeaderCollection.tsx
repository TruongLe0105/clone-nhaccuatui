/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import { categories, mood, scene, topic } from '../../../jsons/collection';

const HeaderCollection = () => {
    const [showMore, setShowMore] = useState({
        title: '',
        data: [],
    });

    const MoreCollection = () => {

        return (
            <div
                className={
                    showMore.title === 'Khung cảnh' ?
                        ` more-collection scene-collection` :
                        showMore.title === 'Chủ đề' ?
                            ' more-collection orther-collection' :
                            ' more-collection'
                }
            >
                {showMore?.data?.slice(5,).map((el: string, index: number) => (
                    <div key={index} className='flex align-center'>
                        <i className="fa-solid fa-angle-right"></i>
                        <a className='pointer name-song cl-blur' title={el}>{el}</a>
                    </div>
                ))}
            </div>
        )
    };

    const Tag = ({
        data,
        collection
    }: any) => {

        const handleClickMore = (collection: string, data: []) => {
            setShowMore({
                title: collection,
                data: data
            })
        }

        return (
            <div className='collection-item'>
                <h3>{collection}</h3>
                <div className='flex flex-col'>
                    {data.slice(0, 5).map((el: string, index: number) => (
                        <div key={index} style={{ marginBottom: '5px' }} className='pointer flex align-center'>
                            <i className="fa-solid fa-angle-right"></i>
                            <a className='name-song cl-blur' title={el}>{el}</a>
                        </div>
                    ))}
                    <div
                        onClick={() => handleClickMore(collection, data)}
                        className='pointer flex align-center'
                    >
                        <i className="fa-solid fa-angle-right"></i>
                        <a>Xem thêm...</a>
                    </div>
                </div>
            </div >
        )
    };

    return (
        <div className='flex justify-between relative header-collection'>
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
            {
                showMore.title && (
                    <MoreCollection />
                )
            }
        </div>
    )
}

export default HeaderCollection;