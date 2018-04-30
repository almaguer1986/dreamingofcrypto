import React from 'react';
import Header from '../Header/Header'
import Bio from './Bio/Bio';

const About = () => {
  return (
    <div className='pt3 db mt3 mt4-m mt4-l'>
      <Header name="About the Developer"/>
        <h2 className="f3 white pa2 w-100">Hello and Welcome to Dreaming Of Crypto! An informative site to get you up to speed on all things crypto.</h2>
      <Bio />
    </div>
  )
}

export default About;
