import React from 'react';
import CardItemMain from '../../components/CardItemMain';
import { LinkSong } from '../../components/Link';

import { data } from '../../jsons/topicDetail';
import BannerTopic from './TopicBanner'

const TopicDetailPage = () => {
    const RenderTopicDetail = () => {

        return (
            <div style={{ padding: 'var(--title_comp)', marginBottom: '5rem' }}>
                <h2>Nhạc Việt</h2>
                <div className='flex justify-between wrap'>
                    {data.map((el: any, index: number) => (
                        <div key={index} className='flex flex-col' style={{ margin: '1rem 0' }}>
                            <CardItemMain
                                isPlayList={true}
                                item={el}
                            />
                            <div style={{ marginTop: '1rem' }}>
                                <LinkSong el={el.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div>
            <BannerTopic />
            <RenderTopicDetail />
        </div>
    )
}

export default TopicDetailPage;