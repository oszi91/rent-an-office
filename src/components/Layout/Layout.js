import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, otherSections }) => {
	return (
		<>
			<Header otherSections={otherSections} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
