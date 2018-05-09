import React from 'react';
import Article from './Article/Article';
import Header from '../Header/Header';

const WalletGuide = () => {
  return (<div className='pt3 db mt3 mt4-m mt4-l'>
    <Header name="Crypto Wallet Guide"/>
    <h2 className="f3 white pa2 w-100">This is a guide to get you started with a MEW (MyEtherWallet), MetaMask and the Enjin mobile Wallet App. With your newly acquired wallet, you will be able to send, receive and store digital assets. You can start earning crypto with apps found in the earn section. Wallets also allow you to participate in airdrops. Airdrops are where you can earn crypto but completing tasks. 
</h2>
    <Article />
  </div>)
}

export default WalletGuide;
