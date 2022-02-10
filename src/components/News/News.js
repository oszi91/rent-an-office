import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Container from './../Layout/Container';

import NewsItem from './NewsItem';

const News = () => {
	const {
		allWpPost: { edges },
	} = useStaticQuery(query);

	return (
		<section className="newsSection">
			<h1 className="newsSection__header">Aktualności</h1>
			<Container>
				<div className="news">
					{edges.map(n => {
						return (
							<NewsItem
								key={n.node.id}
								title={n.node.title}
								date={n.node.date}
								img={
									n.node.featuredImage.node.localFile.childImageSharp
										.gatsbyImageData
								}
								slug={n.node.slug}
							/>
						);
					})}
				</div>
			</Container>
		</section>
	);
};

export default News;

export const query = graphql`
	query MyQuery {
		allWpPost(limit: 3) {
			edges {
				node {
					id
					slug
					date(formatString: "DD.MM.YYYY")
					title
					featuredImage {
						node {
							id
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	}
`;
