import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { SanityBlockContentSection } from '../../generated/graphqlTypes';
import RichText from '../RichText';

const BlockContentSection: React.FC<{ section: SanityBlockContentSection }> = ({ section }) => {
	if (!section) return <></>;

	const { header, image, imagePosition, _rawContent } = section;

	//@ts-ignore
	const img = getImage(image.asset);
	//const direction = imagePosition === 'left' ? 'row' : 'row-reverse';

	return (
		<div className="mb-16 sm:mb-32">
			{header && <h2 className="text-4xl text-center text-gray-400 mb-4 sm:mb-12">{header}</h2>}
			<div
				className={`flex flex-col sm:flex-row flex-nowrap justify-center items-start gap-4 sm:gap-8`}
			>
				<GatsbyImage image={img} alt="section photo" />
				<div className="w-full sm:max-w-[45%]">
					<RichText blocks={_rawContent} />
				</div>
			</div>
		</div>
	);
};

export default BlockContentSection;
