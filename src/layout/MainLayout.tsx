import { FC } from "react";
import MainHeader from "./MainHeader";
import { Outlet } from 'react-router-dom';
import Mainbar from "./Mainbar";

const MainLayout: FC = () => {

    return (
        <div>
            {/* <MainHeader /> */}
            <Mainbar />
            <div className='container-page'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;