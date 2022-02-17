import React from 'react';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './../components/sidebar/Sidebar';
import TopNav from './../components/topnav/TopNav';

const Layout = () => {
    return (
        <>
            <Sidebar />
            <TopNav />
            <div className='main'>
                <div className="overlay"></div>
                <div className='main__content'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
