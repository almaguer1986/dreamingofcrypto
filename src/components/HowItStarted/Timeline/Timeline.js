import React from 'react';
import bitcoin from '../../../images/bitcoin.png';

const Timeline = () => {
  return (<article className="cf ph3 ph5-ns pv4">
    <header className="fn fl-ns w-50-ns pr4-ns">
      <h1 className="mb3 mt0 lh-title theme">
        The Creation of Bitcoin
      </h1>
      <time className="f5 ttu tracked gray">
        Origins
      </time>
      <img src={bitcoin} alt="bitcoin" className="vh-75 db center pt5"/>
    </header>
    <div className="fn fl-ns w-50-ns">
      <p className="lh-copy measure mt4 f3 white mt0-ns">
        The beginings of bitcoin date back to January 2009. The technology and principles used to create bitcoin has been around since 1980's. Satoshi Nakamoto was the one who connected the dots.</p>
        <p className="lh-copy measure mt4 f3 white mt0-ns">With the bitcoin network now a reality, Satoshi was able to mine the first block of bitcoins which had a reward of 50 bitcoins. The first block mined is known as the genessis block and comes with a message that was left inside of the blocks arbitrary data,
          <blockquote className="athelas">
            <p className="f5 f4-m f3-l lh-copy measure mt0 theme i">
              "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks".
            </p>
          </blockquote>
        </p>
        <p className="lh-copy measure mt4 f3 white mt0-ns">The message serves two purposes, the first is as a timestamp to prove when the first block was mined and the second being that the bailouts were cause for creation.</p>
          <p className="lh-copy measure mt4 f3 white mt0-ns">No one has ever seen Satoshi in person, Satoshi only existed in the digital world and left the world his creation, bitcoin.</p>

      <p className="lh-copy measure pt1 f3 white">
        One of the few parting quotes Satoshi left the world with before he vanished.

        <blockquote className="athelas black-90 bl bw2 b--white-20">
          <p className="f5 f4-m f3-l lh-copy measure mt0 theme i">
            If you don't believe me or don't get it, I don't have time to try to convince you, sorry.
          </p>
          <cite className="f6 ttu tracked fs-normal theme">
            ―Satoshi Nakamoto
          </cite>
        </blockquote>
      </p>
      <p className="lh-copy measure mt4 f3 white pt3">You can see Satoshi's last sign of life <a className="dim white link underline" target="_blank" href="https://sourceforge.net/p/bitcoin/mailman/message/26744510/">Here</a></p>
      <p className="lh-copy measure f3 white mt0 pt0">You can find satoshi's bitcoin talk profile <a className="dim white link underline" target="_blank" href="https://bitcointalk.org/index.php?action=profile;u=3">Here</a></p>
    </div>
  </article>)
}

export default Timeline;
