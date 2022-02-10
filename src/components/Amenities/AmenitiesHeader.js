import React from 'react';
import HeadWithLine from '../Layout/HeadWithLine';

const AmenitiesHeader = ({ children }) => {
	return (
		<li className="amenities__list__item amenities__list__item--header">
			<HeadWithLine containerClass="amenities__container">
				{children}
			</HeadWithLine>
		</li>
	);
};

export default AmenitiesHeader;
