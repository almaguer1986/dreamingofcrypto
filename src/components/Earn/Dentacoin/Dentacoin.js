import React from 'react';
import dentacoin from '../../../images/dentacoin.png';

const Dentacoin = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100"}>
      <h1 className="f3-l f3-m f4 white tracked-mega w-50 fl pl2 pr4">
        Dentacoin
      </h1>
    <a href="https://dentacoin.com/" className="w-50"><img src={dentacoin} alt={"dentacoin"} className="h2 mt1 mt2-l mt2-m pt1"/></a>
    </div>



    <div className="pa3">
      <p className="f6 f5-ns lh-copy measure theme">
        Dentacoin has released the Dentacare app, which lets you earn Dentacoin for maintaining healthy dental habits. You run the App in the morning and night when brushing your teeth. The app features entertaining music to get you ready for the day. Dentacoins can be spent at participating dental clinics.
      </p>
      <p className="f6 f5-ns lh-copy measure theme">
        The amount of dentacoin paid out per brush and through achievements depends on the current market value of DCN. Lower value DCN = More DCN awarded. The app is fairly new and does have some issues but will undoubtedly be ironed out in the future.
      </p>

      <p className="f6 f5-ns lh-copy tl measure theme">
        Current Price :
        <a className="link white dim underline pl1" href="https://coinmarketcap.com/currencies/dentacoin/">Found Here</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Exchanges : HitBTC, Cryptopia, CoinExchange
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Android -
        <a className="link white dim underline pl1" href="https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&hl=en">Download Dentacare Android</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        ios - <span className="silver">In Development</span>
      </p>
    </div>
  </article>)
}

export default Dentacoin;
