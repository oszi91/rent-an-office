import React from 'react';
import { Link } from 'gatsby';

const Logo = ({ onClick }) => {
	return (
		<div className="logo" onClick={onClick ? onClick : () => {}}>
			<Link to="/">LOGO</Link>
		</div>
	);
};

export default Logo;
