import React from 'react';
import { graphql } from 'gatsby';
import AuthorItem from '../components/authors/Item';
import { SanityAuthor } from '../generated/graphqlTypes';

type AuthorsProps = {
	data: {
		allSanityAuthor: {
			totalCount: number;
			edges: {
				node: SanityAuthor;
			}[];
		};
	};
};

const Authors: React.FC<AuthorsProps> = ({ data }) => {
	if (!data || !data.allSanityAuthor || !data.allSanityAuthor?.edges) return <></>;

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{data?.allSanityAuthor?.edges?.map(({ node }, index) => {
				return <AuthorItem key={index} author={node} />;
			})}
		</div>
	);
};

export default Authors;

export const query = graphql`
	query AuthorsPage {
		allSanityAuthor {
			totalCount
			edges {
				node {
					name
					slug {
						current
					}
					image {
						asset {
							gatsbyImageData(width: 300)
						}
					}
					_rawBio
				}
			}
		}
	}
`;
