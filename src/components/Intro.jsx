import React from 'react';
import Card from './Card';
import './Intro.scss';

const Intro = () => {
    return (
        <section className="intro">
            <div className="intro__top">
                <h2 className="intro__title">Advanced Statistics</h2>
                <p className="intro__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eveniet, nisi mollitia beatae odio nesciunt ullam!
                </p>
            </div>
            <div className="intro__content">
                <Card title="" content="" />
                <Card title="" content="" />
                <Card title="" content="" />
            </div>
        </section>
    );
};

export default Intro;