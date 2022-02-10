import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { shortenText } from '../../helpers/shortenText';

const NewsItem = ({ img, date, title, slug }) => {
	const shorterTitle = shortenText(title, 60);

	return (
		<article className="news__item">
			<GatsbyImage className="news__item__img" image={img} alt={title} />
			<p className="news__item__date">{date}</p>
			<h3 className="news__item__title">{shorterTitle}</h3>
			<Link className="news__item__link" to={slug}>
				Więcej
			</Link>
		</article>
	);
};

export default NewsItem;
