import React from 'react';
import Header from '../Header/Header';
import Storm from './Storm/Storm';
import Algebraix from './Algebraix/Algebraix';
import Dentacoin from './Dentacoin/Dentacoin';
import Electroneum from './Electroneum/Electroneum';
import Sweatcoin from './Sweatcoin/Sweatcoin';

const Earn = () => {
  return (
    <div className='pt3 db mt3 mt4-m mt4-l'>
      <Header name="Earn Crypto Today!"/>
      <p className="f3 white pa2">Great news! If you have a mobile device you can start earning crypto today with some Apps for free! I am currently using all of the apps listed below. Some are still in Beta mode where the tokens currently have no value.</p>
    <Storm />
    <Dentacoin />
    <Algebraix />
    <Electroneum />
    <Sweatcoin />
    </div>
  )
}

export default Earn;
