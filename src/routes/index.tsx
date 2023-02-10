import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATH } from '../helpers/constant';
import MainLayout from '../layout/MainLayout';
import ArtistPage from '../pages/discover/artist/ArtistPage';
import DiscoverSong from '../pages/discover/NewSongPage';
import PlaylistCollectionPage from '../pages/discover/playlist/PlaylistCollectionPage';
import PlaylistDetailPage from '../pages/discover/playlist/PlaylistDetailPage';
import PlaylistPage from '../pages/discover/playlist/PlaylistPage';
import VideoPage from '../pages/discover/VideoPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/search/SearchPage';
import TopicDetailPage from '../pages/topic/TopicDetailPage';
import TopicPage from '../pages/topic/TopicPage';

const Router = () => {
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
                <Route path='/topic/:title' element={<TopicDetailPage />} />
                <Route path='/playlist/:title' element={<PlaylistDetailPage />} />
                <Route path='/playlist/tags' element={<PlaylistCollectionPage />} />
            </Route>
        </Routes>
    )
}

export default Router;