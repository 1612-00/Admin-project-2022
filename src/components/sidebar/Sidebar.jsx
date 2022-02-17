import React from 'react';
import './sidebar.scss';
import images from '../../constants/images';
import sidebarNav from './../../configs/sidebarNav';
import SidebarNavItem from './../sidebarNavItem/SidebarNavItem';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__user'>
                <img src={images.user1} alt='' />
                <div className='sidebar__user__name'>JohnDeo</div>
            </div>
            <hr />
            <div className='sidebar__menu'>
                {sidebarNav.map((item, index) => (
                    <SidebarNavItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
