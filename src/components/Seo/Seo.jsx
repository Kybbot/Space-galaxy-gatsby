import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const query = graphql`
	{
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;

const Seo = () => {
	const { site } = useStaticQuery(query);

	const defaultTitle = site.siteMetadata.title;
	const metaDescription = site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{ lang: "en" }}
			title={defaultTitle}
			meta={[
				{ name: `description`, content: metaDescription },
				{ name: `og:title`, content: metaDescription },
				{ name: `og:description`, content: metaDescription },
				{ property: `og:type`, content: `website` },
				{ name: `twitter:title`, content: defaultTitle },
				{ name: `twitter:description`, content: metaDescription },
			]}
		></Helmet>
	);
};

export default Seo;
