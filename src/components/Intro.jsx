import React from 'react';
import Card from './Card';
import './Intro.scss';

const content = [
    {
        iconName: 'periscope',
        title: 'Brand Recognition',
        desc: 'Boost your brand recognition with each click. Generic links don\'t mean athing. Branded links help instil confidence in your content.'
    },
    {
        iconName: 'info',
        title: 'Detailed Records',
        desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
        iconName: 'pencil alternate',
        title: 'Fully Customizable',
        desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
];

const Intro = () => {
    return (
        <section className="intro">
            <div className="intro__top">
                <h2 className="intro__title">Advanced Statistics</h2>
                <p className="intro__desc">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>
            <div className="intro__content">
                {content.map(card => <Card {...card} />)}
            </div>
        </section>
    );
};

export default Intro;