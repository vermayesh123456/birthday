import React from 'react';
import Header from './components/Header';
import Wishes from './components/Wishes';
import Photos from './components/Photos';
import Footer from './components/Footer';
import './App.css';
import Balloons from './components/Balloons';


const App = () => {
  return (
    <div className="app">
      <Balloons/>
      <Header />
      <Wishes />
      <Photos />
      <Footer />
    </div>
  );
};

export default App;
