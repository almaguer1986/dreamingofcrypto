import React from 'react';
import Tilt from 'react-tilt';
import './Hero.css';
import logo from '../../images/logo.png'

const Hero = () => {
  return (<header>

      <div className="Logo-parent">
        <Tilt className="Tilt Logo" options={{
            max: 50
          }} style={{
            height: 130,
            width: 350
          }}>
          <div className="Tilt-inner">
            <img src={logo} alt={"logo"}/>
          </div>
        </Tilt>
      </div>


      <div className="tc-l mt7 ph3 text">
        <h1 className="f1 f-headline-l">
          DREAMING OF CRYPTO
        </h1>
        <h2 className="fw1 f3 mt3 white">
          Welcome to Dreaming Of Crypto! We strive to be your one stop crypto stop. Educating those just starting out and keeping the crypto vets updated on the latest and greatest in blockchain technology.
        </h2>
        <p className="f4 white mb5">
          Getting started with crypto can be a little sketchy at first. You will literally be digitizing your hard earned dollars. We aim to bring you the safest and most reliable crypto information available.
        </p>
      </div>

  </header>);
}

export default Hero;
