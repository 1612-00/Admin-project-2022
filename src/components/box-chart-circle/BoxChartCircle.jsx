import React from 'react';
import { circularProgressBarData } from '../../constants/data';
import './boxChartCircle.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BoxChartCircle = () => {
    return (
        <div className='boxChartCircle'>
            <div className='boxChartCircle__content'>
                <div className='boxChartCircle__content__top'>
                    <div className='boxChartCircle__content__top__title'>
                        Visit Separation
                    </div>
                </div>
                <div className='boxChartCircle__content__mid'>
                    <CircularProgressbar value={75} strokeWidth='15' />
                </div>
                <div className='boxChartCircle__content__bottom'>
                    {circularProgressBarData.map((item, index) => (
                        <div key={index}>
                            <div className='boxChartCircle__content__bottom__item'>
                                <div className='boxChartCircle__content__bottom__item__text'>
                                    {item.text}
                                </div>
                                <div className='boxChartCircle__content__bottom__item__value'>
                                    {item.value}%
                                </div>
                            </div>
                            <div className='progress-bar-hr'>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoxChartCircle;
