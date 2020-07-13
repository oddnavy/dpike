import React from 'react';
import { Link } from 'react-static';

export default () => (
  <div className="container">
    <div className="intro">
      <div className="intro__inner">
        <p className="beta">
          Hello, I’m{' '}
          <a href="https://www.linkedin.com/in/david-pike" target="_blank" rel="noopener noreferrer">
            David Pike
          </a>
          . A Senior Frontend Developer based in beautiful Melbourne, Australia.
        </p>
        <p className="beta">
          Currently working at{' '}
          <a href="https://inlight.com.au" rel="noopener noreferrer">
            Inlight
          </a>
          . Previously, at{' '}
          <a href="https://www.evolution7.com.au" target="_blank" rel="noopener noreferrer">
            Evolution7
          </a>{' '}
          helping build websites for{' '}
          <a href="https://www.grilld.com.au" target="_blank" rel="noopener noreferrer">
            Grill’d
          </a>
          ,{' '}
          <a href="https://www.lifebroker.com.au" target="_blank" rel="noopener noreferrer">
            Lifebroker
          </a>
          , and many{' '}
          <a href="https://www.evolution7.com.au/showcase/overview" target="_blank" rel="noopener noreferrer">
            others
          </a>
          .
        </p>
        <p className="beta">
          I am currently{' '}
          <a className="text-red" href="mailto:david@dpike.co.uk">
            unavailable
          </a>{' '}
          for contract work.
        </p>
        <p className="soft--top hard--bottom">
          I occasionally{' '}
          <a href="https://twitter.com/davidpike7" target="_blank" rel="noopener noreferrer">
            tweet
          </a>{' '}
          and write on a{' '}
          <a href="http://nosvamos.co.uk" target="_blank" rel="noopener noreferrer">
            travel blog
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);
