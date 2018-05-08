import React from 'react';
import './Cards.css';

const Cards = () => {
  return (<div>
    <h1 className="f3 f1-m f-headline-l theme mb1 measure">Digital Assets</h1>
    <p className="f3 white mb4 mt0 pt0">Digital assets typically fall under one or more of the categories below</p>
    <div className="flex-l w-100">

      <article className="mw5 center br3 pa4  mv3 ba b--light-blue bg-black-20">
        <div className="dib">
          <p className="f3 dim theme underline ma0 pointer" title="Learn More About Privacy Crypto">
            -Security-
          </p>
        </div>
        <hr className="mw5 bb bw1 b--white-50"/>
        <p className="lh-copy measure center f5 pt1 white tl">
          <ul>
            <li className="pb3">Backed by outside assets</li>
            <li className="pb3">Ability to be issued as a share of a blockchain company, similar to a stock</li>
            <li>Abides by federal securities regulations</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa4  mv3 ba b--light-blue bg-black-20">
        <div className="dib">
          <p className="link f3 dim theme underline ma0 pointer" title="Learn More About Privacy Crypto">
            -Utility-
          </p>
        </div>
        <hr className="mw5 bb bw1 b--white-50"/>
        <p className="lh-copy measure center f5 pt1 white tl">
          <ul>
            <li className="pb3">Access to a product or service</li>
            <li className="pb3">Not designed to be an investment, value can go up</li>
            <li>No rights to company assets</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa4  mv3 ba b--light-blue bg-black-20">
        <div className="dib">
          <p className="link f3 dim theme underline ma0 pointer" title="Learn More About Privacy Crypto">
            -Platform-
          </p>

        </div>
        <hr className="mw5 bb bw1 b--white-50"/>
        <p className="lh-copy measure center f5 pt1 white tl">
          <ul>
            <li className="pb3">Complete blockchain technology that has its own unique set of rules</li>
            <li className="pb3">Creation of new technologies and products are built using platforms</li>
            <li>Provides opportunity for developers</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa4  mv3 ba b--light-blue bg-black-20">
        <div className="dib">
          <p className="link f3 dim theme underline ma0 pointer" title="Learn More About Privacy Crypto">
            -Privacy-
          </p>
        </div>
        <hr className="mw5 bb bw1 b--white-50"/>
        <p className="lh-copy measure center f5 pt1 white tl">
          <ul>
            <li className="pb3">Owner of wallet is unknown, remaining anonymous</li>
            <li className="pb3">Transactions are still publicly broadcasted</li>
            <li>Capable of Obfuscation</li>
          </ul>
        </p>
      </article>
    </div>

  </div>)
}

export default Cards;
