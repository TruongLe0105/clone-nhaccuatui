import React from 'react';
import HeaderCollection from './HeaderCollection';
import { data } from '../../../jsons/listAll';
import CardItemMain from '../../../components/CardItemMain';
import { LinkSingers, LinkSong } from '../../../components/Link';
import PaginationDefault from '../../../components/PaginationDefault';

const PlaylistCollectionPage = () => {
    const RenderCollection = () => {

        return (
            <div className='wrapper-collection'>
                <h2>Tất cả tuyển tập</h2>
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

    return (
        <div>
            <HeaderCollection />
            <RenderCollection />
            <div className='flex-center'>
                <PaginationDefault count={data.length} limit={2} />
            </div>
        </div>
    )
}

export default PlaylistCollectionPage