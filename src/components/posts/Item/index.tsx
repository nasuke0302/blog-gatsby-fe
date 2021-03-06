import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Category from '../Category';
import { SanityPost } from '../../../generated/graphqlTypes';
import { toPlainText } from '../../RichText';

const Item: React.FC<{ post: SanityPost }> = ({ post }) => {
	//@ts-ignore
	const image = getImage(post.mainImage.asset);
	const truncatedBody = toPlainText(post._rawBody).slice(0, 200);

	return (
		<Link
			to={`/posts/${post.slug.current}`}
			className="flex flex-col justify-start align-start cursor-pointer bg-white rounded-md shadow-sm hover:shadow-md hover:-translate-y-2 transition ease-in-out duration-200"
		>
			<div className="w-full h-48">
				{image && (
					<GatsbyImage
						image={image}
						alt="photo"
						className="w-full h-full bg-gray-200 bg-cover bg-repeat bg-center"
					/>
				)}
			</div>
			<div className="p-4 grow flex flex-col justify-between">
				{post._updatedAt && (
					<h6 className="text-gray-500 mb-2 text-xs">
						Last updated on {new Date(post._updatedAt).toLocaleString()}
					</h6>
				)}
				{post.title && <h4 className="text-gray-600 mb-3 text-xl">{post.title}</h4>}

				{post.author && <span className="text-gray-700 mb-3 text-xs">By {post.author.name}</span>}

				{post._rawBody && <p className="grow">{truncatedBody}...</p>}

				{post.categories && (
					<div className="flex flex-row flex-wrap justify-start items-start gap-2 mt-4">
						{post.categories.map((cat, i) => (
							<Category key={i} category={cat} />
						))}
					</div>
				)}
			</div>
		</Link>
	);
};
export default Item;
