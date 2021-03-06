import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout } from "../../components";

const Markdow = ({ data }) => {
	const articles = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<h1>Markdown page</h1>
			{articles &&
				articles.map((article) => {
					const image = getImage(article.frontmatter.img);

					return (
						<article key={article.id}>
							<h2>{article.frontmatter.title}</h2>
							<GatsbyImage image={image} alt={article.frontmatter.title} />
							<p>{article.frontmatter.date}</p>
							<Link to={`/markdown/${article.frontmatter.slug}`}>Go to article</Link>
						</article>
					);
				})}
		</Layout>
	);
};

export const query = graphql`
	query GetAllMarkdownArticles {
		allMarkdownRemark {
			nodes {
				id
				frontmatter {
					title
					date
					slug
					img {
						childImageSharp {
							gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
						}
					}
				}
			}
		}
	}
`;

export default Markdow;
