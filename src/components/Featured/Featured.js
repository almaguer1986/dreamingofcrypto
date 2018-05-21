import React, { Component } from 'react';
import Header from '../Header/Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { coins } from './Coins';

class Featured extends Component {
  constructor() {
    super()
    this.state = {
      coins: coins,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render() {
    const filteredCoins = this.state.coins.filter(coin => {
      return (coin.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || coin.symbol.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    })

    return (
      <div className='pt3 db mt3 mt4-m mt4-l'>
        <Header name="Featured Projects"/>
        <h2 className="f3 white pa2 w-100">There are currently 1000+ crypto currencies on the market today with that number increasing daily. I will be showcasing various projects throughout the market.</h2>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList coins={filteredCoins}/>
      </div>
    )
  }

}

export default Featured;
