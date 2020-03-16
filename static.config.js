import axios from 'axios'
import React from 'react'

const INSTAGRAM_BASE_URL = 'https://graph.instagram.com'

export default {
  Document: ({
    Html, Head, Body, children,
  }) => (
    <Html lang="en-GB">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal website of David Pike Frontend Web Developer" />
        <meta name="author" content="David Pike" />
        <title>David Pike - Senior Frontend Web Developer</title>
        <link
          rel="preload"
          href="/fonts/source-sans-pro-v11-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getSiteData: () => ({
    title: 'David Pike',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/posts',
        component: 'src/containers/Posts',
        getData: async () => {
          const request = await axios.get(`${INSTAGRAM_BASE_URL}/17841400291485644/media`, {
            params: {
              access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
              fields: 'caption,media_url,permalink',
            },
          });
          return { posts: request.data.data };
        },
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  siteRoot: 'https://www.dpike.co.uk',
}
