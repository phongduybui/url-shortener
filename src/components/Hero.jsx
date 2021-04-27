/* eslint-disable */
import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1 className="hero-content__title">
                More than just shorter links
            </h1>
            <p className="hero-content__desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et id at.
            </p>
            <button className="hero-content__btn btn btn--rounded">Get Started</button>
        </div>
    </section>
  );
};

export default Hero;
