import axios from 'axios'
import React from 'react'

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
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          rel="stylesheet"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  getSiteData: () => ({
    title: 'David Pike',
  }),
  getRoutes: async () => {
    const {
      data: { data: posts },
    } = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
        process.env.INSTAGRAM_ACCESS_TOKEN
      }`
    )

    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/posts',
        component: 'src/containers/Posts',
        getData: () => ({
          posts,
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
