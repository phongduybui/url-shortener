/* eslint-disable */
import React from 'react';
import './Hero.scss';
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus et id at.
          </p>
          <button className="hero__btn btn btn--rounded">Get Started</button>
      </div>
      <FormInput />
    </section>
  );
};

export default Hero;
