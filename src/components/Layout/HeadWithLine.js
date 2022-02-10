import React from 'react';

const HeadWithLine = ({ containerClass, children }) => {
	return (
		<div className={containerClass}>
			<h1>{children}</h1>
			<hr />
		</div>
	);
};

export default HeadWithLine;
