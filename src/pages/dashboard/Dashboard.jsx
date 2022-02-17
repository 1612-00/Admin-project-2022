import React from 'react';
import Box from '../../components/box/Box';
import './dashboard.scss';
import { dashboardCardData } from './../../constants/data';
import BoxChartLine from '../../components/box-chart-line/BoxChartLine';
import BoxChartCircle from './../../components/box-chart-circle/BoxChartCircle';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='title-page'>Dashboard</div>
            <div className='dashboard__combo-box'>
                {dashboardCardData.map((item, index) => (
                    <Box key={index} item={item} />
                ))}
            </div>
            <div className='dashboard__chart'>
                <BoxChartLine />
                <BoxChartCircle />
            </div>
        </div>
    );
};

export default Dashboard;
