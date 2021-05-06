import React from 'react';
import '../styles/style.scss'
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';

const App = () => (
  <div className="app">
    <Header />
    <Hero />
    <Intro />
    <Footer />
  </div>
);

export default App;
