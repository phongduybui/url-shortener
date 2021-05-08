/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';

const FormInput = ({ onFormSubmit, formRef }) => {

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = ({ link }) => {
    onFormSubmit(link, setError);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-input" ref={formRef}>
      <div className="form-input__wrapper">
        <div className="form-input__inner">
          <input
            {...register('link', { 
              required: {
                value: true,
                message: 'Please add a link'
              },
              pattern: {
                value: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
                message: 'Invalid link! Example valid: https://www.google.com/'
              }
            })}
            className={`form-input__input ${errors.link && 'error'}`}
            placeholder="Shorten a link here..."
          />
          {errors.link && <p className="error-message">{errors.link.message}</p>}
        </div>
        <button className="form-input__btn btn btn--rounded">
          <span>Shorten It!</span>
        </button>
      </div>
    </form>
  );
};

export default FormInput;
