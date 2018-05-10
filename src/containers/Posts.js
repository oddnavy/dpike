
import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ posts }) => (
  <div className="container container--narrow">
    <h1 style={{textAlign:'center'}}>📷</h1>
    <ul className="photos">
      {posts.map(post => (
        <li className="photos__item" key={post.id}>
          <img src={post.images.standard_resolution.url} height={post.images.standard_resolution.height} width={post.images.standard_resolution.width} />
          { post.caption ?
            <div className="photos__item-caption">
              <span>💬</span>
              {post.caption.text}
            </div>
          : ''}
        </li>
      ))}
    </ul>
    <p className="push--bottom" style={{textAlign:'right'}}>See more on <a href="https://www.instagram.com/oddnavy" target="_blank">Instagram →</a></p>
  </div>
))

