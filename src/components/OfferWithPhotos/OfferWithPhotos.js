import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { findImage } from '../../helpers/queries';

import OneOffer from './OneOffer';

const OfferWithPhotos = () => {
	const {
		allFile: { edges: images },
	} = useStaticQuery(queryx);

	const imgList = {
		img1: findImage(images, '1'),
		img2: findImage(images, '2'),
		img3: findImage(images, '3'),
		img4: findImage(images, '4'),
	};
	const { img1, img2, img3, img4 } = imgList;

	return (
		<section className="offer">
			<OneOffer img={img1} header="Biuro" desc="od 1000 zł/msc" />
			<OneOffer
				img={img2}
				header={`Lorem ipsum\n Biuro`}
				desc="od 500 zł/msc"
				type="rightTop"
				classPosition="offer__item__container--topSmall"
			/>
			<OneOffer
				img={img3}
				header={`Biuro lorem`}
				desc="od 100 zł/msc"
				type="leftBottom"
				classPosition="offer__item__container--bottomSmall"
			/>
			<OneOffer
				img={img4}
				header={`Biuro lorem ipsum\n Lorem`}
				desc="od 100 zł/h"
				type="rightBottom"
				classPosition="offer__item__container--bottomBig"
			/>
		</section>
	);
};

export default OfferWithPhotos;

export const queryx = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "offerWithPhotos" } }) {
			edges {
				node {
					id
					childImageSharp {
						fluid {
							originalName
						}
						gatsbyImageData
					}
				}
			}
		}
	}
`;
