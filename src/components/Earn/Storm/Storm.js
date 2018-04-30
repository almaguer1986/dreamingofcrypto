import React from 'react';
import storm from '../../../images/storm.PNG';

const Storm = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100"}>
      <h1 className="f3 white tracked-mega w-50 fl">
        Storm Play
      </h1>
    <a href="https://stormtoken.com/" className="w-50"><img src={storm} alt={"storm"} className="mt2-m mt2-l mt3 pt1 pt0-m pt0-l"/></a>
    </div>



    <div className="pa3">
      <p className="f6 f5-ns lh-copy measure theme">
        Storm play is an app where you can complete micro tasks in exchange for bolts. You can convert your bolts 3 different ways; Bitcoin, Ethereum or Storm Tokens. The Storm token payout comes with a 20% bonus and you can have your storm tokens directly deposited into your Binance exchange account found under your storm deposit address! No binance account No problem. Have them directly deposited into your Etherwallet address.
      </p>
      <p className="f6 f5-ns lh-copy measure theme">
        The micro tasks I have earned bolts with range from downloading and playing games to Signing up for subscriptions. You can also collect some bolts every 30 minutes. The app is not perfect and does have issues with payouts from time to time.
      </p>

      <p className="f6 f5-ns lh-copy tl measure theme">
        Current Price :
        <a className="link white dim underline pl1" href="https://coinmarketcap.com/currencies/storm/">Found Here</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Exchanges : Binance, Upbit, HitBTC
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Android -
        <a className="link white dim underline pl1" href="https://goo.gl/U4c1GJ">Download Storm Play Android</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        ios - <span className="silver">In Development</span>
      </p>
      <h3 className="f4 light-green">Your support is greatly appreciated please use reference code below</h3>
      <h1 className="f4 bg-black-20 yellow mv0 pv2 ph3 tracked-mega">
        TTWISY
      </h1>
    </div>
  </article>)
}

export default Storm;
