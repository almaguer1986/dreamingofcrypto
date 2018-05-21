import React from 'react';
import Card from './Card/Card';

const CardList = ({ coins }) => {
  const cardArray = coins.map((profile, i) => {
    return (<Card
      key={i}
      id={coins[i].id}
      name={coins[i].name}
      symbol={coins[i].symbol}
      website={coins[i].website}/>
    );
  })
  return (
    <div>
      {cardArray}
    </div>
  );
}

export default CardList;
