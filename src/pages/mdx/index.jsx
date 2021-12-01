import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout } from "../../components";

const Mdx = ({ data }) => {
	const articles = data.allMdx.nodes;

	return (
		<Layout>
			<h1>MDX page</h1>
			{articles &&
				articles.map((article) => {
					const image = getImage(article.frontmatter.img);

					return (
						<article key={article.id}>
							<h2>{article.frontmatter.title}</h2>
							<GatsbyImage image={image} alt={article.frontmatter.title} />
							<p>{article.frontmatter.date}</p>
							<Link to={`/mdx/${article.frontmatter.slug}`}>Go to article</Link>
						</article>
					);
				})}
		</Layout>
	);
};

export const query = graphql`
	query GetAllMdxPosts {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				id
				frontmatter {
					title
					img {
						childImageSharp {
							gatsbyImageData(width: 400)
						}
					}
					date
					slug
				}
			}
		}
	}
`;

export default Mdx;
