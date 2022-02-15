import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Arrow from '../Layout/Arrow';

import ProgressBar from './ProgressBar';

import useSliderHandle from './useSliderHandle';

const Slider = () => {
	const {
		allFile: { edges: images },
	} = useStaticQuery(querySlider);

	const { currentIndex, prevSlide, nextSlide } = useSliderHandle(images);

	return (
		<div className="slider">
			{images.map((slide, index) => {
				return (
					<div
						className={index === currentIndex ? 'slide active' : 'slide'}
						key={index}
					>
						{index === currentIndex && (
							<GatsbyImage
								image={slide.node.childImageSharp.gatsbyImageData}
								alt="background"
								className="slider__background"
							/>
						)}
					</div>
				);
			})}
			<div className="slider__container">
				<Arrow onClick={prevSlide} direction="left" />
				<Arrow onClick={nextSlide} />
				<ProgressBar
					currentSlide={currentIndex + 1}
					allSlides={images.length}
				/>
			</div>
		</div>
	);
};

export default Slider;

export const querySlider = graphql`
	query {
		allFile(
			filter: { relativeDirectory: { eq: "slider" } }
			sort: { fields: name }
		) {
			edges {
				node {
					id
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
