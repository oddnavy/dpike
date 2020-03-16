import React from 'react'
import { withRouteData } from 'react-static'

export default withRouteData(({ posts }) => (
  <div className="container container--narrow">
    <h1 style={{ textAlign: 'center' }}>
      <span role="img" aria-label="Photos">
        📷
      </span>
    </h1>
    <ul className="photos">
      {posts.map(post => (
        <li className="photos__item" key={post.id}>
          <img
            alt={post.caption ? post.caption : ''}
            src={post.media_url}
          />
          {post.caption ? (
            <div className="photos__item-caption">
              <span role="img" aria-label="Caption">
                💬
              </span>
              {post.caption}
            </div>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
    <p className="push--bottom" style={{ textAlign: 'right' }}>
      See more on{' '}
      <a href="https://www.instagram.com/oddnavy" target="_blank" rel="noopener noreferrer">
        Instagram →
      </a>
    </p>
  </div>
))
