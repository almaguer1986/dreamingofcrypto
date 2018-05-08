import React from 'react';
import './Banner.css';

const Banner = () => {
  return (<section className="ph3 ph5-ns pv5">
    <article className="mw8 center br2 ba b--light-blue bg-black-20">
      <div className="dt-ns dt--fixed-ns w-100">
        <div className="pa3 pa4-ns dtc-ns v-mid">
          <div>
            <h2 className="fw4 theme mt0 mb3">
              ***Featured Projects****
            </h2>
            <p className="white measure lh-copy mv0">
              Take a look at my favorite projects and see what they are all about.
            </p>
            <p className="white measure lh-copy mv0">
              Get up to speed on updates, highlights and partnerships!
            </p>
          </div>
        </div>
        <div className="pa3 pa4-ns dtc-ns v-mid">
          <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">
            Check Them Out Here
          </a>
        </div>
      </div>
    </article>
  </section>)
}

export default Banner;
