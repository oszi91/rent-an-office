module.exports = {
	siteMetadata: {
		title: 'Firma',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor',
	},

	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `http://rentofficetemplate.local/graphql`,
				url: `http://rentofficetemplate.local/graphql`,
				protocol: `http`,
				hostingWPCOM: false,
				useACF: true,
			},
		},
	],
};
