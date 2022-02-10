import React from 'react';

const AmenitiesItem = ({ desc, img }) => {
	return (
		<li className="amenities__list__item">
			<div className="amenities__list__item__container">
				<img
					className="amenities__list__item__container__img"
					alt={desc}
					src={img}
				/>
				<p className="amenities__list__item__container__desc">{desc}</p>
			</div>
		</li>
	);
};

export default AmenitiesItem;
