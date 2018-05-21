import React from 'react';

const Card = ({name, symbol, website, id}) => {

  return (<div className='dib br3 tc center ma3 pa3 grow w-80 w-20-l w-40-m '>
    <img alt='Coin Logo' src={id} className="w-80 vh-25"/>
    <div>
      <h1 className="theme">{name}</h1>
      <p className="white f3">Symbol: {symbol}</p>
      <p className="f5">
        <a href={website} rel="noopener noreferrer" target="_blank" className="link theme dim underline">{website}</a>
      </p>
    </div>
  </div>);
}

export default Card;
