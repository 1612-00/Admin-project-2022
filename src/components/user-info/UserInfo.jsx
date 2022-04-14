import React from 'react';
import images from '../../constants/images';
import './userInfo.scss';

const userInfoSelected = [
    {
        icon: <i class='bx bx-user'></i>,
        text: 'My Profile',
    },
    {
        icon: <i class='bx bx-star'></i>,
        text: 'My Balance',
    },
    {
        icon: <i class='bx bx-customize'></i>,
        text: 'Customize',
    },
];

const userInfoSetting = [
    {
        icon: <i class='bx bx-brightness'></i>,
        text: 'Setting',
    },
];

const UserTab = ({ tab }) => {
    return (
        <div className='user-tab'>
            <div className='user-tab__icon'>{tab.icon}</div>
            <div className='user-tab__text'>{tab.text}</div>
        </div>
    );
};

const UserInfo = ({show}) => {
    return (
        <div className={`box-user ${show === true ? 'show' : ''}`}>
            <div className='box-user__top'>
                <div className='box-user__top__img'>
                    <img src={images.user1} alt='' />
                </div>
                <div className='box-user__top__info'>
                    <span className='box-user__top__info__name'>John Deo</span>
                    <span className='box-user__top__info__email'>
                        info@wrappixel.com
                    </span>
                </div>
            </div>
            <div className='box-user__selected'>
                {userInfoSelected.map((item, index) => (
                    <UserTab tab={item} key={index} />
                ))}
                <hr />
            </div>
            <div className='box-user__setting'>
                {userInfoSetting.map((item, index) => (
                    <UserTab tab={item} key={index} />
                ))}
                <hr />
            </div>
            <div className='box-user__logout'>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default UserInfo;
