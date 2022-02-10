const path = require('path');

const createAuthors = async ({ createPage, data }) => {
	await Promise.all(
		data.allSanityAuthor.edges.map(async ({ node }) => {
			const { current } = node.slug;
			createPage({
				path: `/authors/${current}`,
				component: path.resolve(`./src/templates/authors/index.tsx`),
				context: { slug: current }
			});
		})
	);
};

module.exports = { createAuthors };
