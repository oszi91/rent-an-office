import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Arrow from './../Layout/Arrow';

const OneOffer = ({ img, header, desc, type }) => {
	let container, line;
	switch (type) {
		case 'rightTop':
			container = { height: '157px', width: '195px' };
			line = { marginTop: '87px' };
			break;
		case 'leftBottom':
			container = { top: '108px', height: '154px' };
			line = { marginTop: '87px' };
			break;
		case 'rightBottom':
			container = { top: '108px', height: '154px', width: '260px' };
			line = { marginTop: '87px' };
			break;
		default:
			container = null;
			line = null;
	}

	return (
		<article className="offer__item">
			<GatsbyImage image={img} alt={desc} className="offer__item__img" />
			<div className="offer__item__container" style={container}>
				<div className="offer__item__container__square" />
				<h3 className="offer__item__container__header">{header}</h3>
				<hr className="offer__item__container__line" style={line} />
				<p className="offer__item__container__desc">{desc}</p>
			</div>
			<div className="offer__item__link">
				<Arrow />
			</div>
		</article>
	);
};

export default OneOffer;
