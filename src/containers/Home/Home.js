import React, {Component} from 'react';

import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Earn from '../../components/Earn/Earn';
import Safety from '../../components/Safety/Safety';
import GettingStarted from '../../components/GettingStarted/GettingStarted';
import RabbitHole from '../../components/RabbitHole/RabbitHole';
import HotTge from '../../components/HotTge/HotTge';
import { Route } from 'react-router-dom';
import './Home.css';



class Home extends Component {

  render() {
    return (
      <div className="Home">
      <Navigation />
      <Route path="/" exact component={Hero} />
      <Route path="/" exact component={Cards} />
      <Route path="/" exact component={Banner} />
      <Route path="/about" exact component={About} />
      <Route path="/rabbithole" exact component={RabbitHole} />
      <Route path="/gettingstarted" exact component={GettingStarted} />
      <Route path="/safety" exact component={Safety} />
      <Route path="/earn" exact component={Earn} />
      <Route path="/hottge" exact component={HotTge} />
      <Footer />
    </div>);
  }
}

export default Home;
