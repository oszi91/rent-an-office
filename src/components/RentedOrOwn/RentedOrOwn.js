import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeadWithLine from '../Layout/HeadWithLine';

const RentedOrOwn = () => {
	return (
		<section className="rentedOrOwnSection">
			<div className="rentedOrOwn">
				<StaticImage
					style={{
						position: 'absolute',
						right: '0',
					}}
					imgClassName="rentedOrOwn__img"
					src={'../../images/rentedOrOwn/1.png'}
					alt="background"
				/>
				<HeadWithLine containerClass="rentedOrOwn__container">
					Lorem ipsum vs własne biuro
				</HeadWithLine>
				<StaticImage
					objectFit="contain"
					className="rentedOrOwn__decoration"
					src="./../../images/rentedOrOwn/decoration.svg"
					alt=""
				/>
			</div>
		</section>
	);
};

export default RentedOrOwn;
