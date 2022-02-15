import React, { useState } from 'react';

import Container from '../Container';
import Hamburger from '../Hamburger';
import Logo from '../Logo';
import Nav from './Nav';
import NavIcons from './NavIcons';

const Header = ({ otherSections }) => {
	const otherStyle = {
		background: 'black',
		display: 'flex',
		height: '70px',
		alignItems: 'center',
		margin: '0',
	};
	const newsStyle = otherSections ? otherStyle : null;

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuHandler = () => {
		setIsMenuOpen(state => !state);
	};

	const activeMenu = isMenuOpen ? 'nav nav--active' : 'nav';
	const isHamburgerActive = isMenuOpen ? 'hamburgerActive' : '';

	return (
		<section className="headerSection" style={newsStyle}>
			<Container>
				<header className="header">
					<Logo onClick={() => setIsMenuOpen(false)} />
					<nav className={activeMenu}>
						<Nav onClick={menuHandler} />
					</nav>
					<NavIcons />
					<Hamburger
						isHamburgerActive={isHamburgerActive}
						onClick={menuHandler}
					/>
				</header>
			</Container>
		</section>
	);
};

export default Header;
