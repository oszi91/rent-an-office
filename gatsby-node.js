const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const {
		data: {
			allWpPost: { nodes: allPosts },
		},
	} = await graphql(`
		query {
			allWpPost {
				nodes {
					id
					uri
					slug
					content
					date(formatString: "DD.MM.YYYY")
					title
					featuredImage {
						node {
							id
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	`);
	const postTemplate = path.resolve(`./src/templates/page.js`);
	allPosts.forEach(page => {
		createPage({
			path: page.uri,
			component: slash(postTemplate),
			context: {
				id: page.id,
				title: page.title,
				date: page.date,
				featuredImage: page.featuredImage,
				content: page.content,
			},
		});
	});
};
