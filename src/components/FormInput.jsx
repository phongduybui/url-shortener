/* eslint-disable */
import React from 'react';
import './FormInput.scss';

const FormInput = () => {
  return (
    <form className="form-input">
      <div className="form-input__wrapper">
        <input 
          className="form-input__input"
          placeholder="Shorten a link here..."
        ></input>
        <button className="form-input__btn btn btn--rounded">Shorten It!</button>
      </div>
    </form>
  );
};

export default FormInput;
