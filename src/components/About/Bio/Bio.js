import React from 'react';
import pier from '../../../images/pier.jpg';

const Bio = () => {
  return (<article className="dib w-80 pt3 pa2">
    <img src={pier} className="measure br3 w-100 center" alt="pier"/>
    <p className="measure lh-copy f3 w-100 white mt0 center pt4-m pt4-ns">
      If you are like me then sending your money into the digital world can be stressful. Seconds feel like hours as your transaction hasn't even hit the block yet.

    <br />My name is <a className="link theme underline" href="https://www.linkedin.com/in/arturoalmaguer86">Art</a>. I created this site to help crypto newcomers get started quickly and safely.
    <br />I will be happy to answer any questions you may have. I don't do price predictions or recommendations.
    <br />This is an informative site and should be taken as such.</p>
  </article>)
}

export default Bio;
