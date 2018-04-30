import React from 'react';

const Footer = () => {
  return (<footer className="mt3 pv2 ph2 tc-l bg-black-40">
    <div className="db center">
      <div className="pv4 pa2 w-100 dib-l">
        <p className="f3 light-silver">
          <h2 className="pt0 mt0 red underline">Disclaimer</h2>This is an informative site geared towards educating those interested about the crypto space</p>
      </div>
      <div className="pv4 pa2 w-100 w-50-l dib-l">
        <p className="light-silver f3">
          <h2 className="pt0 mt0 blue underline">To Caveat</h2>All information found on this page should be cross referenced for additional accuracy. Check trusted sources.</p>
      </div>
      <div className="pv4 pa2 w-100 w-50-l dib-l mt0">
        <p className="light-silver f3">
          <h2 className="pt0 mt0 green underline">Contact</h2>For any issues regarding information on this site please email: <a className="link underline theme f4 f3-m f3-l" href="mailto:support@dreamingofcrypto.com">support@dreamingofcrypto.com</a></p>
      </div>
    </div>

    <div className="w-100">
      <a className="no-underline ba b--light-blue near-white bg-animate bg-black-20 hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://www.facebook.com/DreamOfCrypto/" title="Facebook">

        <span className="f6 p2">
          Facebook
        </span>
      </a>
      <a className="no-underline ba b--light-blue near-white bg-animate bg-black-20 hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/almaguer1986/dreamingofcrypto" title="GitHub">

        <span className="f6 p2">
          GitHub
        </span>
      </a>

      <a className="no-underline ba b--light-blue near-white bg-animate bg-black-20 hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://youtube.com" title="youtube">

        <span className="f6 p2">
          Youtube
        </span>
      </a>

      <a className="no-underline ba b--light-blue near-white bg-animate bg-black-20 hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/DreamOfCrypto" title="Twitter">
        <span className="f6 p2">
          Twitter
        </span>
      </a>
    </div>
  </footer>)
}

export default Footer;
