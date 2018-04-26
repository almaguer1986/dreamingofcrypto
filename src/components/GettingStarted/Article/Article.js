import React from 'react';
import mew1 from '../../../images/mew-1.png';
import mew2 from '../../../images/mew-2.png';
import mew3 from '../../../images/mew-3.png';

const Article = () => {
  return (<article className="dib">
    <header className="fn fl-ns w-100">
      <h1 className="f1 mb3 pt3 white">
        Creating A Wallet
      </h1>
      <h2 className="f3 white lh-title">
        For the sake of simplicity, This will be a guide to get you started with an MEW (MyEtherWallet), MetaMask and Enjin Wallet App for mobile device.
      </h2>
      <time className="f6 ttu tracked gray">
        April 2018
      </time>
    </header>
    <div className="dib w-30-l w-60-m w-80 white">
      <p className="f2 lh-copy measure mt0-ns pt4 mb1">
        Creating a MEW
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
        <img src={mew1} alt={"mew-1"} className="pb4"/>
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
        <img src={mew2} alt={"mew-2"} className="pb4"/>
        <li className="pb4">
          Once inside your wallet you will find your public key
        </li>
        <img src={mew3} alt={"mew-3"}/>
      </ol>
    </div>
  </article>)
}

export default Article;
