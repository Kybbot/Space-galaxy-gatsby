const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(
		`
			{
				allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 1000) {
					nodes {
						id
					}
				}
			}
		`
	);

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const posts = result.data.allMarkdownRemark.nodes;
	const postsPerPage = 1;
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/pagination` : `/pagination/${i + 1}`,
			component: path.resolve("./src/templates/paginationTp.jsx"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	});
};
