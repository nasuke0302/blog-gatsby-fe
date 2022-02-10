const path = require('path');
const { createAuthors } = require('./src/templates/builder');

const gqlQuery = `
{
  allSanityAuthor {
    edges {
      node {
        slug {
          current
        }
      }
    }
  }
}`;

exports.createPages = async ({ actions, graphql }) => {
	try {
		const { createPage } = actions;
		const { data } = await graphql(gqlQuery);

		//await createAuthors({ createPage, data });
		data.allSanityAuthor.edges.map(({ node }) => {
			const { current } = node.slug;
			createPage({
				path: `/authors/${current}`,
				component: path.resolve(`./src/templates/authors.tsx`),
				context: { slug: current }
			});
		});
	} catch (error) {
		console.error(error);
	}
};
