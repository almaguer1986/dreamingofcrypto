import React from 'react';
import './Project.css';
import TronLogo from '../../../images/TronLogo.jpg';

const Project = () => {
  return (
    <div>
      <div className="Card">
        <div className="ImageBox">
          <img src={TronLogo} alt={"TronLogo"} className="h-100"/>
        </div>
        <div className="Details">
          <h2>Tronix (TRX)</h2>
          <p>
            TRX is the official coin of Tron. Tron is a decentralized entertainment content sharing platform.
            <ul>
              "Healing the internet"
              <li className="tl">Data Liberation: Free and Uncontrolled Data</li>
              <li className="tl">An Enabling Content Ecosystem</li>
            </ul>
            Tron has a roadmap that is currently mapped out to Sep 2027. Justin Sun and his Tron team are more than capable.
          </p>
          <p>
            I think Tron is an amazing project with a solid team that is packed with experience with a proven leader.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project;
