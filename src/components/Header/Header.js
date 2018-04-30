import React from 'react';

const Header = (props) => {
  return (<header className="bg-black-20 b--yellow ba center w-60-l w-80 br3">
    <div className="w-100 ph2 pv2 theme f5 tracked-mega">
      <h1>{props.name}</h1>
    </div>
  </header>)
}

export default Header;
