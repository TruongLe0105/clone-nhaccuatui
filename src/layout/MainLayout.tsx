import { FC } from "react";
import { Outlet } from 'react-router-dom';
import Mainbar from "./Mainbar";
import MainFooter from "./MainFooter";
import Subbar from "./Subbar";

const MainLayout: FC = () => {

    return (
        <div style={{ background: 'var(--cl_body)' }}>
            <Mainbar />
            <div className='container-page'>
                <Outlet />
                <MainFooter />
            </div>
            <Subbar />
        </div>
    )
}

export default MainLayout;