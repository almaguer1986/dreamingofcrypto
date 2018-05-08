import React from 'react';
import bitcoin from '../../../../images/bitcoin.png';

const SmartContracts = () => {
  return (
    <article className="cf ph3 ph5-ns pv4">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="mb3 mt0 lh-title theme">
          Smart Contracts
        </h1>
        <time className="f5 ttu tracked gray">
          Creating digital trust
        </time>
        <img src={bitcoin} alt="bitcoin" className="vh-75 db center pt5"/>
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="lh-copy measure mt4 f3 white mt0-ns">
          The beginings of bitcoin date back to late 2008. Satoshi Nakamoto made the bitcoin whitepaper public in october 2008. The whitepaper provided the solution to the double-spending problem and the blockchain was born.</p>
          <p className="lh-copy measure mt4 f3 white mt0-ns">When the bitcoin network became a reality, Satoshi was able to mine the first block of bitcoin which had a reward of 50 bitcoins. The first block mined is known as the genessis block and comes with a message that was left inside of the blocks arbitrary data,
            <blockquote className="athelas">
              <p className="f5 f4-m f3-l lh-copy measure mt0 theme i">
                "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks".
              </p>
            </blockquote>
          </p>
          <p className="lh-copy measure mt4 f3 white mt0-ns">The message serves two purposes, the first serves as a timestamp to prove when the first block was mined and the second being that the bank bailouts were cause for creation.</p>
            <p className="lh-copy measure mt4 f3 white mt0-ns">No one has ever seen Satoshi in person, Satoshi only existed in the digital world and left the world with bitcoin.</p>

        <p className="lh-copy measure pt1 f3 white">
          Satoshi was able to coordinate with Gavin Andresen and Jeff Garzik to help develop and maintain the source code.

          <blockquote className="athelas black-90 bl bw2 b--white-20">
            <p className="f5 f4-m f3-l lh-copy measure mt0 theme i">
              If you don't believe me or don't get it, I don't have time to try to convince you, sorry.
            </p>
            <cite className="f6 ttu tracked fs-normal theme">
              ―Satoshi Nakamoto
            </cite>
          </blockquote>
        </p>
        <p className="lh-copy measure mt4 f3 white pt3">You can see Satoshi's last update to Bitcoin (0.3.19) <a className="dim theme link underline" rel="noopener noreferrer" target="_blank" href="https://sourceforge.net/p/bitcoin/mailman/message/26744510/">Here</a></p>
        <p className="lh-copy measure f3 white mt0 pt0">You can find Satoshi's bitcoin talk profile <a className="dim theme link underline" rel="noopener noreferrer" target="_blank" href="https://bitcointalk.org/index.php?action=profile;u=3">Here</a></p>
      </div>
    </article>
  )
}

export default SmartContracts;
