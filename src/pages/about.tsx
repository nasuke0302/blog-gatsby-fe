import React from 'react';
import { graphql } from 'gatsby';
import { SanityAbout } from '../generated/graphqlTypes';
import BlockContentSection from '../components/BlockContentSection';

type AboutPageProps = {
	data: {
		sanityAbout: SanityAbout;
	};
};

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
	if (!data || !data?.sanityAbout || !data?.sanityAbout?.sections) return <></>;
	return (
		<div>
			{data.sanityAbout.sections.map((section, index) => (
				<BlockContentSection key={index} section={section} />
			))}
		</div>
	);
};

export default AboutPage;

export const query = graphql`
	query AboutPage {
		sanityAbout {
			sections {
				header
				image {
					asset {
						gatsbyImageData(width: 500)
					}
				}
				imagePosition
				_rawContent
			}
		}
	}
`;
