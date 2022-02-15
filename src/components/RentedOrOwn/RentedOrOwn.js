import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import HeadWithLine from '../Layout/HeadWithLine';

const RentedOrOwn = () => {
	return (
		<section className="rentedOrOwnSection">
			<div className="container">
				<div className="rentedOrOwnSection__img">
					<img
						className="rentedOrOwn__decoration"
						src="rentedOrOwn/decoration.svg"
						alt=""
					/>
				</div>
			</div>
			<div className="containerFromLeft">
				<div className="rentedOrOwn">
					<StaticImage
						className="rentedOrOwn__img"
						src={'../../images/rentedOrOwn/1.png'}
						alt="background"
					/>
					<HeadWithLine containerClass="rentedOrOwn__container">
						{'Lorem ipsum\n vs własne biuro'}
					</HeadWithLine>
				</div>
			</div>
		</section>
	);
};

export default RentedOrOwn;
