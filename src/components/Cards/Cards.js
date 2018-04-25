import React from 'react';
import './Cards.css';

const Cards = () => {
  return (<div>
    <h1 className="f3 f1-m f-headline-l theme mb4">Crypto 101</h1>
    <div className="flex-l w-100">

      <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--light-blue bg-black-20">
        <div className="tc">
          <a className="link f3 dim theme" href="#" title="Learn More About Privacy Crypto">
            -Securities-
          </a>
          <hr className="mw5 bb bw1 b--white-50"/>
        </div>
        <p className="lh-copy measure center f6 white tl">
          <ul>
            <li>Backed by outside assets</li>
            <li>Ability to be issued as a share of a blockchain company, similar to a stock</li>
            <li>Abides by federal securities regulations</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--light-blue bg-black-20">
        <div className="tc">
          <a className="link f3 dim theme" href="#" title="Learn More About Privacy Crypto">
            -Utility-
          </a>
          <hr className="mw5 bb bw1 b--white-50"/>
        </div>
        <p className="lh-copy measure center f6 white tl">
          <ul>
            <li>Access to a product or service</li>
            <li>Not designed to be an investment, value can go up</li>
            <li>No rights to company assets</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--light-blue bg-black-20">
        <div className="tc">
          <a className="link f3 dim theme" href="#" title="Learn More About Privacy Crypto">
            -Platform-
          </a>
          <hr className="mw5 bb bw1 b--white-50"/>
        </div>
        <p className="lh-copy measure center f6 white tl">
          <ul>
            <li>Complete blockchain technology that has its own unique set of rules</li>
            <li>Creation of new technologies and products are built using platforms</li>
            <li>Provides opportunity for developers</li>
          </ul>
        </p>
      </article>

      <article className="mw5 center br3 pa3 pa4-ns mv3 ba b--light-blue bg-black-20">
        <div className="tc">
          <a className="link f3 dim theme" href="#" title="Learn More About Privacy Crypto">
            -Privacy-
          </a>
          <hr className="mw5 bb bw1 b--white-50"/>
        </div>
        <p className="lh-copy measure center f6 white tl">
          <ul>
            <li>Owner of wallet is unknown, remaining anonymous</li>
            <li>Transactions are still publicly broadcasted</li>
            <li>Capable of Obfuscation</li>
          </ul>
        </p>
      </article>
    </div>

  </div>)
}

export default Cards;
