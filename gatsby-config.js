require('dotenv').config();

const sanityConfig = {
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_API_TOKEN,
	graphqlTag: 'default'
};

module.exports = {
	siteMetadata: {
		siteUrl: `https://blogwithsanity.com`
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-graphql-loader`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-source-sanity`,
			options: { ...sanityConfig }
		}
	]
};
