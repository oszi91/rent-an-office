import React from 'react';
import { Link } from 'gatsby';

const Button = ({ src, children }) => {
	if (src) {
		return (
			<Link className="button" to={src}>
				{children}
			</Link>
		);
	}

	return <button className="button">{children}</button>;
};

export default Button;
