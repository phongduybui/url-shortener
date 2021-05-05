/* eslint-disable */
import React from 'react';
import bitly from '../apis/bitly';
import './FormInput.scss';

const FormInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    var dataString = '{ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" }';
    bitly.post('/shorten', dataString)
      .then(response => console.log(response))
  }

  return (
    <form onSubmit={handleSubmit} className="form-input">
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
