import React from 'react';
import { graphql } from 'gatsby';
import PostsList from '../components/posts/List';
import { PostsQuery } from '../generated/graphqlTypes';

type IndexPageProps = {
	data: PostsQuery;
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
	const posts = data.allSanityPost.edges;

	return <PostsList title="Recent Posts" posts={posts} />;
};

export default IndexPage;

export const pageQuery = graphql`
	query Posts {
		allSanityPost {
			edges {
				node {
					id
					title
					_updatedAt
					_rawBody
					slug {
						current
					}
					categories {
						title
					}
					author {
						name
						id
					}
					mainImage {
						asset {
							url
							gatsbyImageData(width: 200)
						}
					}
				}
			}
		}
	}
`;
