import DiscoverGeneral from './Discover';
import { data } from '../../jsons/khampha';


const NewSongPage = () => {

    return (
        <DiscoverGeneral list={data} fullOptions={true} />
    )
};

export default NewSongPage;