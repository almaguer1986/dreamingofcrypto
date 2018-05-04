import React from 'react';
import alx from '../../../images/alx.png';

const Algebraix = () => {
  return (<article className="center mw5 mw6-ns br3 hidden ba b--black-40 bw3 shadow-5 mv4">
    <div className={"bg-black-20 br3 br--top bb bw2 dib w-100"}>
      <h1 className="f3-l f3-m f4 theme tracked-mega w-50 fl pl2 pr4">
        Algebraix
      </h1>
    <a href="https://algebraix.io/" rel="noopener noreferrer" target="_blank" className="w-25"><img src={alx} alt={"alx"} className="h1 h2-m h2-l mt2-m mt2-l mt3 pt0-ns pt1-m pt1-l"/></a>
    </div>



    <div className="pa3 white">
      <p className="f6 f5-ns lh-copy measure">
        Algebraix is on a mission to end Data exploitation! The app lets you earn ALX tokens by watching videos. I find the content refreshing and entertaining.
      </p>
      <p className="f6 f5-ns lh-copy measure">
         The app is in phase II beta and tokens currently have no value but may have value in the future. You need to have a gmail address that is used in google play store to participate in the beta.
      </p>

      <p className="f6 f5-ns lh-copy tl measure">
        Current Price : N/A
      </p>
      <p className="f6 f5-ns lh-copy tl measure">
        Exchanges : N/A
      </p>
      <p className="f6 f5-ns lh-copy tl measure">
        Android -
        <a className="link theme dim underline pl1" rel="noopener noreferrer" target="_blank" href="https://algebraix.io/beta/">ALX Beta Phase II Download</a>
      </p>
      <p className="f6 f5-ns lh-copy tl measure">
        ios - <span className="silver">In Development</span>
      </p>
    </div>
  </article>)
}

export default Algebraix;
