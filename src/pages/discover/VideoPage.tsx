import DiscoverGeneral from './Discover';
import { data } from '../../jsons/video';


const VideoPage = () => {

    return (
        <DiscoverGeneral
            list={data}
            fullOptions={false}
            isVideo={true}
            classCard='card-detail'
        />
    )
};

export default VideoPage;