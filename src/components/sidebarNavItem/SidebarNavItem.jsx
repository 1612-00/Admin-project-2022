import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarNavItem.scss';

const SidebarNavItem = ({ item }) => {
    const [activeTab, setActiveTab] = useState('/');
    const location = useLocation();

    useEffect(() => {
        const curPath = window.location.pathname;    
        setActiveTab(curPath);
    }, [location])

    return (
        <div className='sidebar-nav-item'>
            <div className='main__text'>{item.text}</div>
            {item.tab.map((nav, index) => (
                <Link
                    className={`sidebar-nav-item__tab ${nav.link === activeTab ? 'active' : ''}`}
                    key={index}
                    to={nav.link}
                >
                    <div className='sidebar-nav-item__tab__icon'>
                        {nav.icon}
                    </div>
                    <div className='sidebar-nav-item__tab__text'>
                        {nav.text}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SidebarNavItem;
