import React from 'react';
import mew1 from '../../../images/mew-1.png';
import mew2 from '../../../images/mew-2.png';
import mew3 from '../../../images/mew-3.png';
import meta1 from '../../../images/meta-1.png';
import meta2 from '../../../images/meta-2.png';
import meta3 from '../../../images/meta-3.png';
import meta4 from '../../../images/meta-4.png';
import meta5 from '../../../images/meta-5.png';
import enj from '../../../images/enjin.PNG';
import ImageZoom from 'react-medium-image-zoom';
import './Article.css'

const Article = (props) => {
  return (<article className="dib">
    <header className="fn fl-ns w-100">
      <h2 className="f3 white lh-title pa2">
        This is a guide to get you started with a MEW (MyEtherWallet), MetaMask and the Enjin mobile Wallet App. With your newly acquired wallet, you will be able to send, receive and store digital assets. You can start earning crypto with apps found in the earn section. Wallets also allow you to participate in airdrops. Airdrops are where you can earn crypto but completing tasks. 
      </h2>
      <time className="f6 ttu tracked gray">
        April 2018
      </time>
    </header>
    <div className="dib w-30-l w-60-m w-80 white">
      <p className="f2 lh-copy measure mt0-ns pt4 mb1 theme">
        Creating a MEW
        <hr className="w-100" />
      </p>
      <ol className="f3 lh-copy measure tl">
        <li className="pb4">
          Go to your favorite search browser and search for "my ether wallet"
        </li>
        <li className="pb3">
          Navitgate to myetherwallet.com and bookmark for future use, this should be your only gateway to MEW.
        </li>
        <div className="flex items-center tc justify-center pa3 bg-black-60 red br4">
          <svg className="w2" data-icon="info" viewBox="0 0 32 32" style={{fill: "currentcolor"}}>
            <title>
              info icon
            </title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"/>
          </svg>
          <span className="lh-title ml3">
            Verify your connection is secure!
          </span>
        </div>
        <li className="pt3 pb4">
          Enter a Password (Don't Forget It!) and Click "Create Wallet"
        </li>
        <ImageZoom
          image={{
            src: mew1,
            alt: 'mew1',
            className: 'pb3',
            style: { width: '20em' }
          }}
          zoomImage={{
            src: mew1,
            alt: 'mew1',
            style: { width: '50em' }
          }}
        />
        <li className="pb4">
          Click the Blue Button "Download Keystore File (UTC / JSON)"
          <br />**Save File to USB**
        </li>
        <li className="pb4">
          I only recommend writing down your Private Key on a piece of paper. Write it good and mulitple times for accuracy. Most important take away is to HAVE A BACKUP!
        </li>
        <li className="pb4">
          You can now access your wallet 2 different ways
          <ul className="pt3">
            <li className="pb3">
              Using Keystore / JSON file
              <br /> <span className="yellow">Access using the file you downloaded in combination with your password</span>
            </li>
            <li>
              Using Private key
              <br /> <span className="yellow">Only use if keystore not working and double check SSL</span>
            </li>
          </ul>
        </li>
        <ImageZoom
          image={{
            src: mew2,
            alt: 'mew2',
            className: 'pb3',
            style: { width: '20em' }
          }}
          zoomImage={{
            src: mew2,
            alt: 'mew2',
            style: { width: '50em'}
          }}
        />
        <li className="pb4">
          Once inside your wallet you will find your public key
        </li>
        <ImageZoom
          image={{
            src: mew3,
            alt: 'mew3',
            className: 'pb0',
            style: { width: '20em' }
          }}
          zoomImage={{
            src: mew3,
            alt: 'mew3',
            style: { width: '50em' }
          }}
        />
      </ol>
    </div>
    <div>
    <h1 className="f3 yellow pa2">Congradulations! You now have an Ether Wallet</h1>
    </div>
    <div className="dib w-30-l w-60-m w-80 white pb5">
      <p className="f2 lh-copy measure mt0-ns pt2 mb1 theme">
        Getting Started With Metamask
      </p>
      <hr className="w-100" />
      <ol className="f3 lh-copy measure tl">
        <li className="pb4">
          Download the Metamask Browser Extension
        <br />
          <span className="yellow">The latest Chrome, firfox and Brave browsers all have metamask Extensions</span>
        </li>
        <ImageZoom
          image={{
            src: meta1,
            alt: 'meta1',
            className: 'pb4',
            style: { width: '20em' }
          }}
          zoomImage={{
            src: meta1,
            alt: 'meta1',
            style: { width: '50em', }
          }}
        />

        <li className="pb3">
          Open the extension, Navigate through the Agreement
        </li>
        <ImageZoom
          image={{
            src: meta2,
            alt: 'meta2',
            className: 'pb4 vh-50 db center'
          }}
          zoomImage={{
            src: meta2,
            alt: 'meta2',
            style: { width: '60em', }
          }}
        />
        <li className="pt3 pb4">
          Enter a Password (Don't Forget It!) and Click "Create"
        </li>
        <ImageZoom
          image={{
            src: meta3,
            alt: 'meta3',
            className: 'pb4 vh-50 db center'
          }}
          zoomImage={{
            src: meta3,
            alt: 'meta3',
            style: { width: '60em' }
          }}
        />
        <li className="pb4">
          You will see your Seed Phrase for your wallet
        </li>
        <ImageZoom
          image={{
            src: meta4,
            alt: 'meta4',
            className: 'pb4 vh-50 db center'
          }}
          zoomImage={{
            src: meta4,
            alt: 'meta4',
            style: { width: '60em' }
          }}
        />

        <span className="yellow"> Copy this phrase down. You can recover your wallet on different browsers and computers using this. Keep this safe </span>
        <li className="pb4 pt4">
          Once you have copied and or saved your seed file. You will now be inside your metamask.
        </li>

        <li className="pb4">
          "Copy Address to clipboard" Will copy your public address so you can paste where needed
        </li>
        <ImageZoom
          image={{
            src: meta5,
            alt: 'meta5',
            className: 'pb4 vh-50 db center'
          }}
          zoomImage={{
            src: meta5,
            alt: 'meta5',
            style: { width: '60em' }
          }}
        />
        <div className="flex items-center tc justify-center pa3 bg-black-60 green br4">
          <svg className="w2" data-icon="info" viewBox="0 0 32 32" style={{fill: "currentcolor"}}>
            <title>
              info icon
            </title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"/>
          </svg>
          <span className="lh-title ml3">
            Your public address is safe to broadcast
          </span>
        </div>
      </ol>
    </div>

    <div className="w-80 ba bw3 b--purple db light-purple center br3">
      <h1 className="tc f1 pa2">Enjin - A Mobile Digital Smart Wallet</h1>
      <img src={enj} alt={"enj"} className="pb3 h4 db center"/>
      <p className="f2 tl-l tc pl5-l pa2 ">The enjin wallet app is available for free on both IOS and Android</p>
      <ol className="list f2 tc pa2">
        <li>-Safe-</li>
        <li>-Secure-</li>
        <li>-Convenient-</li>
      </ol>
      <p className="pb3 f2-l f2">Android
      <a className="flex db-m db-l pt1 link w-40 center underline theme dim" href="https://enj.li/androidwallet"> Android Wallet Download</a>
      </p>

      <p className="pb4 f2-l f2">ios
      <a className="flex db-l db-m pt1 link w-40 center underline theme dim" href="https://t.co/3ezK7KI3Vd"> ios Wallet Download</a>
      </p>
    </div>

    <div className="white f3 f2-m f2-l w-80 db center">
      <p>There is a plethora of other wallets out there supporting different blockchains. Whichever wallets you choose to go with, the folowing are the universal rules which you should practice to keep your tokens safe</p>
      <div className="w-60 db center ba bw2 w-80 mt5 b--black-20 br3 shadow-5">
      <ul className="list pa3">
        <li className="pb3"><span className="green pb2">Public Addresses are safe to broadcast and share</span><br />AND<br /><span className="red pt2">Passphrases and Private keys should be thought of as the keys to your vault. Dont lose them</span></li>
        <li className="pb3 white dim">Make backup copies of keys and passphrases</li>
        <li className="pb3 white dim">Keep private keys and passphrases offline</li>

        <li className="pb3 white dim">When transacting tokens, be sure to double check address and blockchain identity</li>
        <div className="flex items-center tc justify-center pa3 bg-black-60 red br4">
          <svg className="w2" data-icon="info" viewBox="0 0 32 32" style={{fill: "currentcolor"}}>
            <title>
              info icon
            </title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"/>
          </svg>
          <span className="lh-title ml3">
            Don't Send an Ether based Token to Bitcoin address or vice versa
          </span>
        </div>
      </ul>
    </div>
    </div>
  </article>)
}

export default Article;
