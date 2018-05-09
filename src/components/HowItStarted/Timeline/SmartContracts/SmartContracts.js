import React from 'react';
import ethereum from '../../../../images/ethereum.png';

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
        <img src={ethereum} alt="bitcoin" className="vh-50 db center pt5"/>
      </header>
      <div className="fn fl-ns w-50-ns">
        <p className="lh-copy measure mt4 f3 white mt0-ns">Coming Soon...</p>

      </div>
    </article>
  )
}

export default SmartContracts;
