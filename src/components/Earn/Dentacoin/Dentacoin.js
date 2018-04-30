import React from 'react';
import dentacoin from '../../../images/dentacoin.png';

const Dentacoin = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100"}>
      <h1 className="f3-l f3-m f4 theme tracked-mega w-50 fl pl2 pr4">
        Dentacoin
      </h1>
    <a href="https://dentacoin.com/" className="w-50"><img src={dentacoin} alt={"dentacoin"} className="h2 mt1 mt2-l mt2-m pt1"/></a>
    </div>



    <div className="pa3">
      <p className="f6 f5-ns lh-copy measure theme">
        Dentacoin has released Dentacare which lets you earn Dentacoin for maintaining healthy dental habits. You run the App in the morning and night when brushing teeth. The app features entertaining music to get you ready for the day.
      </p>
      <p className="f6 f5-ns lh-copy measure theme">
        The amount of dentacoin paid out per brush and through achievments depends on current market value. The lower the DCN the more DCN awarded and vice versa. The app is fairly new and does have some issues but will undoubtedly be ironed out in the future.
      </p>

      <p className="f6 f5-ns lh-copy tl measure theme">
        Current Price :
        <a className="link white dim" href="https://coinmarketcap.com/currencies/dentacoin/"> HERE</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Exchanges : <span className="white">HitBTC, Cryptopia, CoinExchange</span>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        Android -
        <a className="link white dim" href="https://play.google.com/store/apps/details?id=com.dentacoin.dentacare&hl=en">Download Dentacare for Android</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure theme">
        ios - <span className="white">Currently in Development</span>
      </p>
    </div>
  </article>)
}

export default Dentacoin;
