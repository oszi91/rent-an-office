import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Seo = ({ title, description, meta, lang }) => {
	const {
		site: { siteMetadata },
	} = useStaticQuery(detailsQuery);

	const metaTitle = title || siteMetadata.title;
	const metaDescription = description || siteMetadata.description;
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={metaTitle}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: metaTitle,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
};

Seo.defaultProps = {
	lang: `pl`,
	meta: [],
};

const detailsQuery = graphql`
	query siteDetails {
		site {
			siteMetadata {
				description
				title
			}
		}
	}
`;
