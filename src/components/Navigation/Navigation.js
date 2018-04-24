import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navigation.css';


const Navigation = () => {
  return (

      <nav className="db w-100 border-box fixed z-5 Nav">
      <ul>
        <li className="link dtc-l v-mid dim w-100-ns w-25-l tc tl-l mb2 mb0-l fl-l" title="Home">
          <Link to="/"><img src={logo} alt={"logo"} className="dib w3 h3"/></Link>
        </li>
        <div className="db dt v-mid w-100 w-75-l tc pt3">
          <li className="link dim yellow f4 dib mr3 mr4-l" title="About">
            <Link to="/about">About</Link>
          </li>
          <li className="link dim yellow f4 dib mr3 mr4-l" title="The Rabbit Hole">
            <Link to="/rabbithole">The Rabbit Hole</Link>
          </li>
          <li className="link dim yellow f4 dib mr3 mr4-l" title="Getting Started">
            <Link to="/gettingstarted">Getting Started</Link>
          </li>
          <li className="link dim yellow f4 dib mr3 mr4-l" title="Safety">
            <Link to="/safety">Safety</Link>
          </li>
          <li className="link dim green f4 dib mr3 mr4-l" title="Earn Crypto">
            <Link to="/earn">Earn Crypto</Link>
          </li>
          <li className="link dim red f4 dib" title="Hot TGE's">
            <Link to="/hottge">Hot TGE's</Link>
          </li>
        </div>
      </ul>

    </nav>


    )

}

export default Navigation;
