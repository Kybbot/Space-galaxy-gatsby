import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components";

const MarkdownArticle = ({ data }) => {
	const { html } = data.markdownRemark;
	const { title, date } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<article>
				<h1>{title}</h1>
				<p>{date}</p>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</article>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				date
				slug
			}
			html
		}
	}
`;

export default MarkdownArticle;
