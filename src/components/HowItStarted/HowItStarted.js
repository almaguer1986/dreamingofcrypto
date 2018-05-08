import React from 'react';
import Header from '../Header/Header';
import Timeline from './Timeline/Timeline';

const HowItStarted = () => {
  return (
    <div className='pt3 db mt3 mt4-m mt4-l'>
      <Header name="Welcome To The Blockchain"/>
      <h2 className="f3 white pa2 w-100">Who is Satoshi Nakamoto? The world may never know and it is the biggest mystery in the crypto space. The digital genius who created bitcoin. </h2>
      <Timeline />
    </div>
  )
}

export default HowItStarted;
