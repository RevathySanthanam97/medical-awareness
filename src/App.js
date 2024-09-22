import React from 'react';
import "./reset.css";
import "./style.css";
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Featured } from './components/Featured';
import { Econ } from './components/Econ';
import { Sticky } from './components/Sticky';
import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Banner />
      <Featured />
      <Econ />
      <Sticky />
      <Gallery />
    </div>
  );
}

export default App;
