import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Category from '../../components/posts/Category';
import RichText from '../../components/RichText';
import { SanityPost } from '../../generated/graphqlTypes';

export const formatDate = (date: string) => new Date(date).toLocaleString();

const Post: React.FC<{
	data: {
		sanityPost: SanityPost;
	};
}> = ({ data }) => {
	const { sanityPost } = data;

	if (!sanityPost) {
		return <></>;
	}

	// @ts-ignore
	const image = getImage(sanityPost.mainImage.asset);

	return (
		<div className="md:mt-8 mb-16">
			<div
				style={{ backgroundImage: `url(${image.images.fallback.src})` }}
				className="h-96 bg-gray-400 bg-cover bg-repeat bg-center relative mb-6 md:mb-12"
			>
				<div className="py-2 md:py-4 px-4 md:py-8 absolute bottom-0 inset-x-0 bg-black/75">
					<time className="text-slate-300 mb-2 text-xs">
						Last Updated: {formatDate(sanityPost._updatedAt)}
					</time>

					<h1 className="text-slate-100 mb-4 md:mb-5 text-3xl">{sanityPost.title}</h1>

					<div className="flex flex-col md:flex-row-reverse justify-end items-start md:items-center gap-4 mb-2 md:mb-0">
						{sanityPost.categories && (
							<p className="flex gap-1">
								{sanityPost.categories.map((cat, i) => (
									<Category key={i} category={cat} />
								))}
							</p>
						)}
						{sanityPost.author && (
							<p className="text-white font-light">
								Written by{' '}
								<Link
									className="text-inherit font-bold hover:underline"
									to={`/authors/${sanityPost.author.slug.current}`}
								>
									{sanityPost.author.name}
								</Link>
							</p>
						)}
					</div>
				</div>
			</div>
			<div className="sanityPost-body">
				<RichText blocks={sanityPost._rawBody} />
			</div>
		</div>
	);
};

export default Post;

export const query = graphql`
	query PostBySlug($slug: String!) {
		sanityPost(slug: { current: { eq: $slug } }) {
			_updatedAt
			title
			_rawBody
			author {
				name
				slug {
					current
				}
			}
			slug {
				current
			}
			mainImage {
				asset {
					gatsbyImageData(width: 700)
				}
			}
			categories {
				title
			}
		}
	}
`;
