import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout, Counter } from "../../components";

const shortcodes = { Counter };

const MdxArticle = ({ data }) => {
	const { title, date } = data.mdx.frontmatter;
	const mdx = data.mdx;

	return (
		<Layout>
			<article>
				<h1>{title}</h1>
				<p>{date}</p>
				<MDXProvider components={shortcodes}>
					<MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
				</MDXProvider>
			</article>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date
				slug
			}
			body
		}
	}
`;

export default MdxArticle;
