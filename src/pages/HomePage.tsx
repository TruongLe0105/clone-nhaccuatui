import React from 'react';
import CardList from '../components/CardList';

import BannerHome from '../components/home/BannerHome';
import HotTopic from '../components/home/HotTopic';
import NCTRealtime from '../components/home/NCTRealtime';
import NewRelease from '../components/home/NewRelease';
import Song from '../components/home/Song';
import VideoHot from '../components/home/VideoHot';
import { newReleaseData } from '../jsons/moiphathanh';
import { springData } from '../jsons/muaxuanoi';

import { welcomeSpring } from '../jsons/nonnaodonxuan';
import { hitData } from '../jsons/odaycohit';
import { topData } from '../jsons/top100';
import RankTable from './RankTable';

const HomePage = () => {

    return (
        <div className='container-home'>
            <BannerHome />
            <CardList
                title='Nôn nao đón xuân'
                data={welcomeSpring}
                comp='welcomeSpring'
            />
            <CardList
                title='Mùa xuân ơi'
                data={springData}
                comp='spring'
            />
            <CardList
                title='Ở đây có hit'
                data={hitData}
                comp='hit'
            />
            <NewRelease
                data={newReleaseData}
            />
            <NCTRealtime />
            <RankTable />
            <VideoHot />
            <Song />
            <HotTopic />
            <CardList
                title='Top 100'
                data={topData}
                comp='hundred'
            />
        </div>
    )
}

export default HomePage;