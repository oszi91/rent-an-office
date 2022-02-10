import React from 'react';
import Layout from '../components/Layout/Layout';
import NewsSinglePage from '../components/NewsSingePage/NewsSinglePage';
import { Seo } from '../components/SEO/Seo';

const Page = ({ pageContext }) => {
	return (
		<Layout otherSections={true}>
			<Seo title={pageContext.title} />
			<NewsSinglePage
				title={pageContext.title}
				date={pageContext.date}
				img={
					pageContext.featuredImage.node.localFile.childImageSharp
						.gatsbyImageData
				}
				content={pageContext.content}
			/>
		</Layout>
	);
};

export default Page;
