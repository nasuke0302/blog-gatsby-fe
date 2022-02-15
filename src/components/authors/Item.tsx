import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { toPlainText } from '../RichText';
import { SanityAuthor } from '../../generated/graphqlTypes';

const AuthorItem: React.FC<{ author: SanityAuthor }> = ({ author }) => {
	if (!author) return <></>;

	const { name, image, slug, _rawBio } = author;
	//@ts-ignore
	const img = getImage(image.asset);
	const truncatedBody = toPlainText(_rawBio).slice(0, 200);

	return (
		<Link
			to={slug.current}
			className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition ease-in-out duration-200"
		>
			<div className="h-[200px]">
				<GatsbyImage image={img} alt={name} className="w-full h-full" />
			</div>
			<div className="p-4">
				{name && <h1 className="text-bold text-2xl mb-4">{name}</h1>}
				<div>
					<p className="text-gray-500 font-light">{truncatedBody}...</p>
					<p className="text-blue-600 mt-2">
						Keep reading <i className="las la-arrow-right"></i>
					</p>
				</div>
			</div>
		</Link>
	);
};
export default AuthorItem;
