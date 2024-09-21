import React from 'react';
import "./reset.css";
import "./style.css";
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Featured } from './components/Featured';
import { Econ } from './components/Econ';
import { Sticky } from './components/Sticky';

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Banner />
      <Featured />
      <Econ />
      <Sticky />
    </div>
  );
}

export default App;
