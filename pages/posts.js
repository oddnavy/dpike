export default function PostsPage({ posts }) {
  return (
    <div className="container container--narrow">
      <h1 style={{ textAlign: 'center' }}>
        <span role="img" aria-label="Photos">
          📷
        </span>
      </h1>
      <ul className="photos">
        {posts.map((post) => (
          <li className="photos__item" key={post.id}>
            <img alt={post.caption ? post.caption : ''} src={post.media_url} width={post.width} height={post.height} />
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
      <p className="push--bottom" style={{ textAlign: 'center' }}>
        See more on{' '}
        <a href="https://www.instagram.com/oddnavy" target="_blank" rel="noopener noreferrer">
          Instagram →
        </a>
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const instagramEndpoint = `https://www.instagram.com/graphql/query/?query_hash=9dcf6e1a98bc7f6e92953d5a61027b98&variables={"id":"361225716","first":16}`;
  const response = await fetch(instagramEndpoint).then((res) => res.json());
  const posts = response.data.user.edge_owner_to_timeline_media.edges.map((edge) => {
    return {
      id: edge.node.id,
      media_url: edge.node.display_resources[0].src,
      width: edge.node.display_resources[0].config_width,
      height: edge.node.display_resources[0].config_height,
      thumbnail_url: edge.node.is_video ? $edge.node.thumbnail_resources[2].src : null,
      caption: edge.node.edge_media_to_caption.edges[0] ? edge.node.edge_media_to_caption.edges[0].node.text : '',
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 1 day in seconds
    fallback: 'blocking',
  };
}
