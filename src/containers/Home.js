import React from 'react'
import { withSiteData, Link } from 'react-static'

export default withSiteData(() => (
  <div className="container">
    <div className="intro">
      <div className="intro__inner">
        <p className="beta">Hello, I’m <a href="https://www.linkedin.com/in/david-pike" target="_blank">David Pike</a>. A Senior Frontend Developer based in beautiful Melbourne, Australia.</p>
        <p className="beta">Previously, I worked at <a href="https://www.evolution7.com.au">Evolution7</a> helping build websites for <a href="https://www.grilld.com.au">Grill’d</a>, <a href="https://www.lifebroker.com.au">Lifebroker</a>, <a href="https://www.moneynow.com.au/calculator/">MoneyNow</a>, and many <a href="https://www.evolution7.com.au/showcase/overview" target="_blank">others</a>.</p>
        <p className="beta">I am currently <a className="text-green" href="mailto:david@dpike.co.uk">available</a> for contract work.</p>
        <p className="soft--top hard--bottom">I like to take <Link to="/posts">photos</Link> and occasionally <a href="https://twitter.com/davidpike7" target="_blank">tweet</a>.</p>
      </div>
    </div>
  </div>
))
