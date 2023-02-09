import { data } from '../../jsons/chude';
import BannerTopic from './TopicBanner';

const TopicPage = () => {

    const RenderTopic = () => {
        return (
            <div style={{ marginBottom: '6rem' }}>
                <h2 style={{
                    padding: 'var(--title_comp)'
                }}>Tổng Hợp Topic</h2>
                <div className='wrapper-topic'>
                    {data.map((topic: any, index: number) => (
                        <div key={index} className='pointer topic-item'>
                            <img src={topic.img} alt='img' />
                            <div className='bg-dark' />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div>
            <BannerTopic />
            <RenderTopic />
        </div>
    )
}

export default TopicPage