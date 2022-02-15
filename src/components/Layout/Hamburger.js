import React from 'react';

const Hamburger = ({isHamburgerActive, onClick}) => {
	return (
		<div className={`${isHamburgerActive}`} onClick={onClick}>
			<div className="hamburgerIcon">
				<div />
			</div>
		</div>
	);
};

export default Hamburger;
