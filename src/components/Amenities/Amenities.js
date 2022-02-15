import React from 'react';

import Arrow from '../Layout/Arrow';
import Button from '../Layout/Button';

import AmenitiesHeader from './AmenitiesHeader';
import AmenitiesItem from './AmenitiesItem';
import amenitiesList from './list';

const Amenities = () => {
	return (
		<section className="amenities">
			<ul className="amenities__list">
				<AmenitiesHeader>{`Lorem\n ipsum dolor\n sit amet,\n conse`}</AmenitiesHeader>
				{amenitiesList.map(a => (
					<AmenitiesItem key={a.img} {...a} />
				))}
			</ul>
			<div className="amenities__showMore">
				<Button src="/">Dowiedz się więcej</Button>
				<Arrow hover={false} />
			</div>
		</section>
	);
};

export default Amenities;
