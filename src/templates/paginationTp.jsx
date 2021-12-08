import React from "react";
import { graphql, Link } from "gatsby";

import { Layout } from "../components";

const Pagination = ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;

	const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();

	const posts = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<h1>Pagination</h1>
			{posts.map((node) => {
				const title = node.frontmatter.title;
				return <div key={node.id}>{title}</div>;
			})}
			<hr />
			{!isFirst && (
				<Link to={"/pagination/" + prevPage} rel="prev">
					← Previous Page
				</Link>
			)}
			{Array.from({ length: numPages }, (_, i) => (
				<Link key={`pagination-number${i + 1}`} to={`/pagination/${i === 0 ? "" : i + 1}`}>
					{i + 1}
				</Link>
			))}
			{!isLast && (
				<Link to={"/pagination/" + nextPage} rel="next">
					Next Page →
				</Link>
			)}
		</Layout>
	);
};
export const blogListQuery = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
			nodes {
				id
				frontmatter {
					title
				}
			}
		}
	}
`;

export default Pagination;
