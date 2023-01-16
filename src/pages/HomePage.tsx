import React from 'react';
import CardList from '../components/CardList';

import BannerHome from '../components/home/BannerHome';
import NCTRealtime from '../components/home/NCTRealtime';
import NewRelease from '../components/home/NewRelease';
import { newReleaseData } from '../jsons/moiphathanh';
import { springData } from '../jsons/muaxuanoi';

import { welcomeSpring } from '../jsons/nonnaodonxuan';
import { hitData } from '../jsons/odaycohit';

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
        </div>
    )
}

export default HomePage;