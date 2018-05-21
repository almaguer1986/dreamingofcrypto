import React from 'react';
import electroneum from '../../../images/electroneum.png';

const Electroneum = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100 pa1"}>
      <h1 className="f3-l f3-m f4 theme tracked-mega w-50 fl pl1 pl3-l pl3-m">
        Electroneum
      </h1>
    <a href="https://electroneum.com/" rel="noopener noreferrer" target="_blank" className="w-50"><img src={electroneum} alt={"electroneum"} className="h2 mt2 pt1-l fr pr3 fn-m fn-l"/></a>
    </div>



    <div className="pa3">
      <p className="f5 f4-m f4-l lh-copy measure white">
        Electroneum - the mobile cryptocurrency. The app they have released allows for simulated mobile crypto mining. Your phone will not be actually mining and you will be rewarded with ETN tokens by participating. Simply run the miner anytime you want to start collecting.
      </p>
      <p className="f5 f4-m f4-l lh-copy measure white">
        The app has a limited number of ETN's which will be awarded. I typically earn around 10 ETN a day on a S7 phone. The app occasionally stops at which point you will need to restart the miner. The app automatically deposits the ETN you have mined to your wallet. The number of users is gaining quickly, it is essentially free money. 
      </p>

      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Current Price :
        <a className="link theme dim underline pl1" rel="noopener noreferrer" target="_blank" href="https://coinmarketcap.com/currencies/electroneum/">Found Here</a>
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Exchanges : Kucoin, Cryptopia
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        Android -
        <a className="link theme dim underline pl1" rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.electroneum.mobile">Download Beta Electroneum for Android</a>
      </p>
      <p className="f5 f4-m f4-l lh-copy tl measure white">
        ios - <span className="silver">In Development</span>
      </p>
      <h3 className="f4 light-green">Your support is appreciated please use reference code below</h3>
      <h1 className="f4 bg-black-20 yellow mv0 pv2 ph3 tracked-mega">
        343822
      </h1>
    </div>
  </article>)
}

export default Electroneum;
