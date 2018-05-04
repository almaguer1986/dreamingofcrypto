import React from 'react';
import Header from '../Header/Header';
import Poster from './Poster/Poster';

const Safety = () => {
  return (
    <div className='pt3 db mt3 mt4-m mt4-l'>
      <Header name="Practicing Safe Crypto"/>
      <h2 className="f3 white pa2 pa3-l w-100">There are tons of horror stories around where people have lost it all in crypto. Following these rules have kept me safe so far. The best option to store crypto long, long term is to get a hard wallet. I am currently using the Ledger Nano S. The Trezor and Keepkey are also both worth mentioning.  </h2>
      <Poster />
    </div>
  )
}

export default Safety;
