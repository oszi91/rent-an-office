import React from 'react';
import { Link } from 'gatsby';

const list = [
	{ title: 'Poznaj przestrzeń', link: '/' },
	{ title: 'Oferta', link: '/' },
	{ title: 'Lokalizacja', link: '/' },
	{ title: 'Własne biuro', link: '/' },
	{ title: 'Kontakt', link: '/' },
];

const Nav = ({ onClick }) => {
	const menu = list.map(item => {
		return (
			<li className="nav__list__item" key={item.title} onClick={onClick}>
				<Link className="link" to={item.link}>
					{item.title}
				</Link>
			</li>
		);
	});

	return <ul className="nav__list">{menu}</ul>;
};

export default Nav;
