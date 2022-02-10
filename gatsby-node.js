const { createAuthors } = require('./src/templates/authors/builder');
const { createPosts } = require('./src/templates/posts/builder');

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
	allSanityPost {
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

		await createAuthors({ createPage, data });
		await createPosts({ createPage, data });
	} catch (error) {
		console.error(error);
	}
};
