import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AppContext } from '../contexts/AppContext';
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
    const [activeMenu, setActiveMenu] = useState(1);
    const [activeInside, setActiveInside] = useState<string>();

    const location = useLocation();
    const path = location.pathname;

    const { home, search, discover, topic, top100, chart, collection, playlistDetail, orther } = PATH;

    const checkPath = () => {
        switch (path) {
            case search:
                setActiveMenu(0);
                break;
            case discover.song || discover.playlist || discover.video || discover.artist:
                setActiveMenu(2);
                break;
            case topic || collection || top100:
                setActiveMenu(3);
                break;
            case chart:
                setActiveMenu(4);
                break;
            case home:
                setActiveMenu(1);
                break;
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0 })
        setActiveInside(path);
        checkPath();
    }, [path]);

    return (
        <AppContext.Provider
            value={{
                activeMenu,
                activeInside,
                setActiveInside
            }}
        >
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path={search} element={<SearchPage />} />
                    <Route path={discover.song} element={<DiscoverSong />} />
                    <Route path={discover.playlist} element={<PlaylistPage />} />
                    <Route path={discover.video} element={<VideoPage />} />
                    <Route path={discover.artist} element={<ArtistPage />} />
                    <Route path={topic} element={<TopicPage />} />
                    <Route path={chart} element={<ChartRankPage />} />
                    <Route path={collection} element={<PlaylistCollectionPage />} />
                    <Route path={topic} element={<TopicDetailPage />} />
                    <Route path={top100} element={<RankHundredPage />} />
                    <Route path={playlistDetail} element={<PlaylistDetailPage />} />
                    <Route path={orther} element={<Music4UPage />} />
                </Route>
            </Routes>
        </AppContext.Provider>
    )
}

export default Router;