import React, { useState, useRef } from 'react';
import bitly from '../apis/bitly';
import '../styles/style.scss'
import Footer from './Footer';
import FormInput from './FormInput';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import ShortenedList from './shortened/ShortenedList';

const App = () => {
  const [shortened, setShortened] = useState([]);
  const formRef = useRef(null);
  
  const handleSubmit = (link, setError) => {
    const dataString = `{"long_url": "${link}"}`; 
    bitly.post('/shorten', dataString)
      .then(response => {
        setShortened(shortened => [response.data, ...shortened ])
      })
      .catch(err => {
        setError('link', {
          type: 'APIFailed',
          message: err.message,
        })
      })
  }
  
  return (
    <div className="app">
      <Header />
      <Hero formRef={formRef} />
      <FormInput onFormSubmit={handleSubmit} formRef={formRef} />
      <ShortenedList results={shortened} />
      <Intro />
      <Footer formRef={formRef} />
    </div>
  );
}

export default App;
