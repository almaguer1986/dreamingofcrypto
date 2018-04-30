import React from 'react';
import electroneum from '../../../images/electroneum.png';

const Electroneum = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100 pa1"}>
      <h1 className="f3 theme tracked-mega w-50 fl">
        Electroneum
      </h1>
    <a href="https://electroneum.com/" className="w-50"><img src={electroneum} alt={"electroneum"} className="fr fn-l fn-m h2 mt3 mt2-l mt2-m pt1-l pt1-m"/></a>
    </div>



    <div className="pa3">
      <p className="f6 f5-ns lh-copy measure theme">
        Electroneum - the mobile cryptocurrency. The app the have released allows for mobile crypto mining. Your phone will not actually be mining but you will be rewarded with ETN tokens by participating. Simply run the miner anytime you want to start collecting.
      </p>
      <p className="f6 f5-ns lh-copy measure theme">
        The app is currently in Beta phase and does come with some issues that are being worked on. The main issue is that you cannot currently withdrawl your ETN. Your miner will periodically stop from time to time, at this point you will need to reset it simply by following on screen prompts.
      </p>

      <p className="f6 f5-ns lh-copy tl measure theme">
        Current Price :
        <a className="link white dim" href="https://coinmarketcap.com/currencies/electroneum/"> HERE</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Exchanges : <span className="white">Kucoin, Cryptopia</span>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Android -
        <a className="link white dim" href="https://play.google.com/store/apps/details?id=com.electroneum.mobile">Download Beta Electroneum for Android</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        ios - <span className="white">Currently in Development</span>
      </p>
      <h3 className="f4 blue">Your support is appreciated please use reference code below</h3>
      <h1 className="f4 bg-black-20 yellow mv0 pv2 ph3 tracked-mega">
        343822
      </h1>
    </div>
  </article>)
}

export default Electroneum;
