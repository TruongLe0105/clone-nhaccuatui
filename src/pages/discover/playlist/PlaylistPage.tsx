import DiscoverGeneral from '../Discover';
import { data } from '../../../jsons/playlist';


const PlaylistPage = () => {

    return (
        <DiscoverGeneral list={data} fullOptions={false} />
    )
};

export default PlaylistPage;