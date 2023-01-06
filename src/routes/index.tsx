import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATH } from '../helpers/constant';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/search/SearchPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<HomePage />} />
                <Route path={PATH.search} element={<SearchPage />} />
                <Route path={PATH.song} element={<HomePage />} />
                <Route path={PATH.playlist} element={<HomePage />} />
                <Route path={PATH.chart} element={<HomePage />} />
                <Route path={PATH.orther} element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default Router;