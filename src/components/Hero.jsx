/* eslint-disable */
import React from 'react';
import cover from '../images/illustration-working.svg';

const Hero = ({ formRef }) => {
  return (
    <section className="hero">
      <img src={cover} className="hero__cover"></img>
      <div className="hero__content">
          <h1 className="hero__title">
              More than just shorter links
          </h1>
          <p className="hero__desc">
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <button 
            className="btn btn--rounded btn--large"
            onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            <span>Get Started</span>
          </button>
      </div>
    </section>
  );
};

export default Hero;
