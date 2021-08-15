import React, { useState, useRef } from 'react';
import bitly from '../apis/bitly';
import '../styles/style.scss';
import Footer from './Footer';
import FormInput from './FormInput';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import ShortenedList from './shortened/ShortenedList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [shortened, setShortened] = useState([]);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (link, setError) => {
    const dataString = `{"long_url": "${link}"}`;

    const existLink = shortened.find((item) => item.long_url === link);
    if (existLink) {
      toast.warning('This link has been shortened!');
      return;
    }
    setLoading(true);

    bitly
      .post('/shorten', dataString)
      .then((response) => {
        setShortened((shortened) => [response.data, ...shortened]);
      })
      .catch((err) => {
        setError('link', {
          type: 'APIFailed',
          message: err.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='app'>
      <Header />
      <Hero formRef={formRef} />
      <FormInput
        onFormSubmit={handleSubmit}
        loading={loading}
        formRef={formRef}
      />
      <ShortenedList results={shortened} />
      <Intro />
      <Footer formRef={formRef} />
      <ToastContainer position='bottom-right' autoClose={3000} />
    </div>
  );
};

export default App;
