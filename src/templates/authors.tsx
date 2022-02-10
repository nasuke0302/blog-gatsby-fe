import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PostsList from '../components/posts/List';
import RichText from '../components/RichText';
import { SanityAuthor, SanityPost } from '../generated/graphqlTypes';

const Authors: React.FC<{
	data: {
		sanityAuthor: SanityAuthor;
		allSanityPost: { edges: { node: SanityPost }[] };
	};
}> = ({ data }) => {
	const { sanityAuthor, allSanityPost } = data;

	if (!sanityAuthor) {
		return <></>;
	}

	// @ts-ignore
	const image = getImage(sanityAuthor.image.asset);

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-[250px_auto] gap-8">
				{image && (
					<GatsbyImage
						class="rounded-full border border-solid border-cyan-600 aspect-square"
						image={image}
						alt={sanityAuthor.name}
					/>
				)}

				<div className="flex flex-col justify-center items-start gap-4">
					{sanityAuthor?.name && <h1 className="text-3xl">{sanityAuthor.name}</h1>}

					{sanityAuthor?._rawBio && (
						<div>
							<RichText blocks={sanityAuthor._rawBio} />
						</div>
					)}
				</div>
			</div>
			{allSanityPost && (
				<div className="my-8">
					<PostsList posts={allSanityPost.edges} title="Published Posts" />
				</div>
			)}
		</div>
	);
};

export default Authors;

export const query = graphql`
	query AuthorAndAuthorPostsBySlug($slug: String!) {
		sanityAuthor(slug: { current: { eq: $slug } }) {
			name
			_rawBio
			image {
				asset {
					gatsbyImageData(width: 200)
				}
			}
		}
		allSanityPost(filter: { author: { slug: { current: { eq: $slug } } } }) {
			edges {
				node {
					title
					slug {
						current
					}
					_rawBody
					mainImage {
						asset {
							gatsbyImageData(width: 200)
						}
					}
					categories {
						title
					}
				}
			}
		}
	}
`;
