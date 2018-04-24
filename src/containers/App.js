import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation/Navigation';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const particleOptions = {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 750
          }
        },
        color: {
          value: '#52B0CA'
        },
        shape: {
          type: 'star'
        },
        stroke: {
          width: 0,
          color: '#000'
        },
        polygon: {
          nb_sides: 5
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 3.5,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.2,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#fff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      }
    }

class App extends Component {

  render() {
    return (<div className="App">

        <Particles
          canvasClassName='nasa'
          className='particles'
          params={particleOptions} />

      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>);
  }
}

export default App;
