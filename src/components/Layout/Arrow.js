import React from 'react';

const Arrow = ({ direction, hover, onClick }) => {
	let isHover = hover ? null : { background: 'black' };

	return (
		<div
			role="button"
			tabIndex={0}
			className={`arrow arrow__${direction}`}
			onClick={onClick ? onClick : () => {}}
		>
			<i className={`fas fa-arrow-${direction}`} style={isHover}></i>
		</div>
	);
};

Arrow.defaultProps = {
	direction: 'right',
	hover: true,
};

export default Arrow;
