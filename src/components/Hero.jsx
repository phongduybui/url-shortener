/* eslint-disable */
import React from 'react';
import cover from '../images/illustration-working.svg';
import FormInput from './FormInput';

const Hero = () => {
  return (
    <section className="hero">
      <img src={cover} className="hero__cover"></img>
      <div className="hero__content">
          <h1 className="hero__title">
              More than just shorter links
          </h1>
          <p className="hero__desc">
            Build your brand's recognition and get detailed insights on how your links arc pcrforming.
          </p>
          <button className="btn btn--rounded btn--large">
            <span>Get Started</span>
          </button>
      </div>
      <FormInput />
    </section>
  );
};

export default Hero;
