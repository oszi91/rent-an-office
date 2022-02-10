import React from 'react';

import OfferWithPhotos from './OfferWithPhotos/OfferWithPhotos';
import Amenities from './Amenities/Amenities';
import RentedOrOwn from './RentedOrOwn/RentedOrOwn';
import News from './News/News';
import Gallery from './Gallery/Gallery';
import Slider from './Slider/Slider';
import { Seo } from './SEO/Seo';
import InfoAndForm from './InfoAndForm/InfoAndForm';
import Container from './Layout/Container';
import Layout from './Layout/Layout';

const HomePage = () => {
	return (
		<>
			<Layout>
				<Seo />
				<Container>
					<Slider />
					<InfoAndForm />
					<OfferWithPhotos />
					<Amenities />
				</Container>
				<RentedOrOwn />
				<News />
				<Gallery />
			</Layout>
		</>
	);
};

export default HomePage;
