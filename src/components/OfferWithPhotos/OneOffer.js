import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Arrow from './../Layout/Arrow';

const OneOffer = ({ img, header, desc, classPosition }) => {
	return (
		<article className="offer__item">
			<GatsbyImage image={img} alt={desc} className="offer__item__img" />
			<div
				className={`offer__item__container ${
					classPosition ? classPosition : ''
				}`}
			>
				<div className="offer__item__container__square" />
				<h3 className="offer__item__container__header">{header}</h3>
				<hr className="offer__item__container__line" />
				<p className="offer__item__container__desc">{desc}</p>
			</div>
			<div className="offer__item__link">
				<Arrow />
			</div>
		</article>
	);
};

export default OneOffer;
