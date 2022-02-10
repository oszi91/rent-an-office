import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from '../Layout/Container';
import HeadWithLine from '../Layout/HeadWithLine';

const NewsSinglePage = ({ img, date, title, content }) => {
	return (
		<section className="singleNewsSection">
			<Container>
				<article className="singleNews">
					<HeadWithLine containerClass="singleNews__title">
						{title}
					</HeadWithLine>
					<span className="singleNews__square"></span>
					<p className="singleNews__date">{date}</p>
					<GatsbyImage className="singleNews__img" image={img} alt={title} />
					<div
						className="singleNews__content"
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
				</article>
			</Container>
		</section>
	);
};

export default NewsSinglePage;
