import React from 'react';
import sweatcoin from '../../../images/sweatcoin.png';

const Sweatcoin = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100 pa1"}>
      <h1 className="f3 theme tracked-mega w-50 fl pr4 pl1">
        Sweatcoin
      </h1>
    <a href="https://sweatco.in/" rel="noopener noreferrer" target="_blank" className="w-50"><img src={sweatcoin} alt={"sweatcoin"} className="h2 mt2 pt1 fr fn-m fn-l pr3"/></a>
    </div>



    <div className="pa3">
      <p className="f5 f4-m f4-l lh-copy measure white">
        Sweatcoin is the App that rewards you with sweatcoins for walking. The sweatcoins can currently be exchanged for sponsored goods and services. It should be noted that while this isn't a cryptocurrency today, the founders have announced that they are "hastily" working towards creating a blockchain.
      </p>
      <p className="f5 f4-m f4-l lh-copy measure white">
        There is no solid information on how the blockchain creation will integrate with the existing sweatcoins that have already been earned. I listed the app on here because it has a promising future if the team is able to deliver. I speculate that at minumum, you will be able to convert your existing sweatcoins into the new sweatcoin crypto.
      </p>

      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Current Price : N/A
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Exchanges : N/A
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Android -
        <a className="link theme dim underline pl1" rel="noopener noreferrer" target="_blank" href="https://sweatco.in/hi/arturo172183">Download Sweatcoin for Android</a>
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        ios -
        <a className="link theme dim underline pl1" rel="noopener noreferrer" target="_blank" href="https://sweatco.in/hi/arturo172183">Download Sweatcoin for ios</a>
      </p>
      <h3 className="f4 light-green">Your support is appreciated</h3>
      <h1 className="f4 bg-black-20 yellow mv0 pv2 ph3 tracked-mega">
        Download From Links Above
      </h1>
    </div>
  </article>)
}

export default Sweatcoin;
