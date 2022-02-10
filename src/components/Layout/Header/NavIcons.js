import React from 'react';
import { Link } from 'gatsby';

const list = [
	{ icon: 'fa-brands fa-facebook-f', link: '/' },
	{ icon: 'fa-brands fa-instagram', link: '/' },
];

const NavIcons = () => {
	const icons = list.map(i => {
		return (
			<li className="navIcons__item" key={i.icon}>
				<Link to={i.link}>
					<div>
						<i className={i.icon}></i>
					</div>
				</Link>
			</li>
		);
	});

	return <ul className="navIcons">{icons}</ul>;
};

export default NavIcons;
