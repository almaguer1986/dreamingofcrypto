import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navigation.css';


const Navigation = () => {
  return (

      <nav className="db w-100 border-box z-5 Nav">
      <ul className="nav">
        <li className="link dtc-l v-mid dim w-100-ns w-25-l tc tl-l mb2 mb0-l fl-l" title="Home">
          <Link to="/"><img src={logo} alt={"logo"} className="dib-l w3 h3"/></Link>
        </li>
        <div className="db-m dt v-mid w-100 w-75-l tc pt2">
          <li className="link dim theme underline f3 mr3 mr4-l pt2 dib-m dib-l" title="About">
            <Link to="/about">About</Link>
          </li>
          <li className="link dim theme underline f3 mr3 mr4-l pt2 dib-m dib-l" title="The Rabbit Hole">
            <Link to="/howitstarted">How it Started</Link>
          </li>
          <li className="link dim theme underline f3 mr3 mr4-l pt2 dib-m dib-l" title="Safety">
            <Link to="/safety">Safety</Link>
          </li>
          <li className="link dim theme underline f3 mr3 mr4-l pt2 dib-m dib-l" title="Getting Started">
            <Link to="/walletguide">Wallet Guide</Link>
          </li>
          <li className="link dim green underline f3 mr3 mr4-l pt2 dib-m dib-l" title="Earn Crypto">
            <Link to="/earn">Earn Crypto</Link>
          </li>
          <li className="link dim blue underline f3 pt2 dib-m dib-l mr4" title="Hot TGE's">
            <Link to="/featured">Featured Projects</Link>
          </li>
        </div>
      </ul>

    </nav>


    )

}

export default Navigation;
