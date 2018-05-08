import React from 'react';
import pier from '../../../images/pier.jpg';

const Bio = () => {
  return (<article className="dib w-80 pt3 pa2">
    <img src={pier} className="measure br3 w-100 center" alt="pier"/>


    <p className="measure lh-copy f3 w-100 white mt0 center pt2 mt3">Welcome, My name is <a className="link theme underline" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/arturoalmaguer86">Art</a> and I created this site to help those new to the crypto space get started quickly and safely.</p>
    <p className="measure lh-copy f3 w-100 white mt0 center pt2-m pt2-ns">I will be happy to answer any questions you may have. </p>
    <p className="measure lh-copy f3 w-100 yellow mt0 center pt2-m pt2-ns">I don't do price predictions or recommendations. </p>
  </article>)
}

export default Bio;
