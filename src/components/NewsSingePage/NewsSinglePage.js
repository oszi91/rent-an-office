import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Container from '../Layout/Container';
import HeadWithLine from '../Layout/HeadWithLine';

const NewsSinglePage = ({ img, date, title, content }) => {
	return (
		<section className="d-flex w-100 singleNewsSection">
			<Container>
				<article className="d-flex align-items-center flex-column my-5 mx-auto col-8 col-sm-10 text-center position-relative min-vh-100 singleNews">
					<HeadWithLine containerClass="singleNews__title w-50 my-4 ">
						{title}
					</HeadWithLine>
					<span className="mb-3 singleNews__square"></span>
					<p className="mb-2 singleNews__date">{date}</p>
					<GatsbyImage
						className="w-75 my-5 singleNews__img"
						image={img}
						alt={title}
					/>
					<div
						className="w-75 my-4 singleNews__content"
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
				</article>
			</Container>
		</section>
	);
};

export default NewsSinglePage;
