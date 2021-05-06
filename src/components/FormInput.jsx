/* eslint-disable */
import React from 'react';
import bitly from '../apis/bitly';

const FormInput = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataString = '{"long_url": "https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data"}'; 
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
        <button className="form-input__btn btn btn--rounded">
          <span>Shorten It!</span>
        </button>
      </div>
    </form>
  );
};

export default FormInput;
