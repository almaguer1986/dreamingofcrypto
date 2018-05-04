import React from 'react';

const Poster = () => {
  return (
    <div className="w-80 pa3-l pa3-m pa0 b--black-30 ba bw3 shadow-5 br4 center">
      <h1 className="f2 theme">***Guidelines to keep you safe***</h1>
      <hr className="w-80 bb shadow-5 theme"/>
      <ul className="list f3 f2-l near-white mr4">
        <li className="pb4"><span className="theme">1.</span> Never send out your private keys or passphrases under any circumstances</li>
        <li className="pb3"><span className="theme">2.</span> Make reliable backups of your keys and passphrases. Legible and indestructable:</li>
        <ul className="tl dib center bg-black-20">
          <li className="pb2">Use A high grade metal stamp kit</li>
          <li className="pb2">Write with a high quality pen, won't smear or smudge</li>
          <li >Never store on a device with internet access</li>
        </ul>
        <li className="pb4 pt4"><span className="theme">3.</span> Verify SSL certificates on web browsers, double check web addresses and bookmark frequently used sites</li>
        <li className="pb4"><span className="theme">4.</span> Limit your access points. Dont log into your accounts from multiple devices</li>
        <li><span className="theme">5.</span> Use additional security features when available (2fa and authenticator are essential)</li>
      </ul>
      <div className="flex items-center tc justify-center pa3 gold">
        <svg className="w2" data-icon="info" viewBox="0 0 32 32" style={{fill: "currentcolor"}}>
          <title>
            info icon
          </title>
          <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"/>
        </svg>
        <span className="lh-title ml3 bg-black-30 br2 f3">
          DYOR. Do your own research!
        </span>
      </div>
    </div>
  )
}

export default Poster;
