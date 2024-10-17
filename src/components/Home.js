import React from 'react';
import '../styles.css';
import Header from './Header.js';
import Description from './Description';
import Product from './Product';
import Solution from './Solution';
import Cta from './Cta';

export default function Home() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Description></Description>
        <Product></Product>
        <Solution></Solution>
        <Cta></Cta>
      </div>
    </div>
  );
}