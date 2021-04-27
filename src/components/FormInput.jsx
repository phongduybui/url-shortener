/* eslint-disable */
import React from 'react';
import './FormInput.scss';

const FormInput = () => {
  return (
    <form className="form-input">
      <div className="wrap">
        <input className="input-link"></input>
        <button className="btn btn--rounded">Shorten </button>
      </div>
    </form>
  );
};

export default FormInput;
