import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { PATH } from '../helpers/constant';
import MainLayout from '../layout/MainLayout';
import ArtistPage from '../pages/discover/artist/ArtistPage';
import DiscoverSong from '../pages/discover/NewSongPage';
import PlaylistCollectionPage from '../pages/discover/playlist/PlaylistCollectionPage';
import PlaylistDetailPage from '../pages/discover/playlist/PlaylistDetailPage';
import PlaylistPage from '../pages/discover/playlist/PlaylistPage';
import VideoPage from '../pages/discover/VideoPage';
import HomePage from '../pages/HomePage';
import Music4UPage from '../pages/music4U/Music4UPage';
import ChartRankPage from '../pages/rank/ChartRankPage';
import RankHundredPage from '../pages/rank/RankHundredPage';
import SearchPage from '../pages/search/SearchPage';
import TopicDetailPage from '../pages/topic/TopicDetailPage';
import TopicPage from '../pages/topic/TopicPage';

const Router = () => {
    const location = useLocation();
    const path = location.pathname.split('/');

    useEffect(() => {
        console.log({ path })

    }, [path])
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<HomePage />} />
                <Route path={PATH.search} element={<SearchPage />} />
                <Route path={PATH.song} element={<DiscoverSong />} />
                <Route path={PATH.playlist} element={<PlaylistPage />} />
                <Route path={PATH.video} element={<VideoPage />} />
                <Route path={PATH.artist} element={<ArtistPage />} />
                <Route path={PATH.topic} element={<TopicPage />} />
                <Route path={PATH.chart} element={<ChartRankPage />} />
                <Route path='/topic/:title' element={<TopicDetailPage />} />
                <Route path='/playlist/:title' element={<PlaylistDetailPage />} />
                <Route path='/playlist/tags' element={<PlaylistCollectionPage />} />
                <Route path='/top100' element={<RankHundredPage />} />
                <Route path='/discover/weekly' element={<Music4UPage />} />
            </Route>
        </Routes>
    )
}

export default Router;