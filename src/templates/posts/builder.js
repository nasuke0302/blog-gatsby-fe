const path = require('path');

const createPosts = async ({ createPage, data }) => {
	await Promise.all(
		data.allSanityPost.edges.map(async ({ node }) => {
			const { current } = node.slug;
			createPage({
				path: `/posts/${current}`,
				component: path.resolve(`./src/templates/posts/index.tsx`),
				context: { slug: current }
			});
		})
	);
};

module.exports = { createPosts };
