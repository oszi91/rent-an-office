import React from 'react';

import Container from '../Container';
import Logo from '../Logo';
import Nav from './Nav';
import NavIcons from './NavIcons';

const Header = ({ otherSections }) => {
	const otherStyle = {
		background: 'black',
		display: 'flex',
		height: '70px',
		alignItems: 'center',
		padding: '0',
	};

	const newsStyle = otherSections ? otherStyle : null;

	return (
		<section className="headerSection" style={newsStyle}>
			<Container>
				<header className="header">
					<Logo />
					<nav className="nav">
						<Nav />
					</nav>
					<NavIcons />
				</header>
			</Container>
		</section>
	);
};

export default Header;
