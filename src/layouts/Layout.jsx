import React, { useContext } from 'react';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from './../components/sidebar/Sidebar';
import TopNav from './../components/topnav/TopNav';
import ThemeSetting from '../components/theme-setting/ThemeSetting';
import { ThemeContext } from './../contexts/ThemeContext';

const Layout = () => {
    // Context
    const { themeState } = useContext(ThemeContext);

    return (
        <div
            className={`layout ${themeState.themeMode} top_nav-color__${themeState.topNavColor} sidebar-color__${themeState.sidebarColor}`}
        >
            <Sidebar />
            <TopNav />
            <div className='main'>
                <div className='overlay'></div>
                <div className='main__content'>
                    <Outlet />
                </div>
            </div>
            <ThemeSetting />
        </div>
    );
};

export default Layout;
