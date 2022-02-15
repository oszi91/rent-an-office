import React from 'react';

const Message = ({ isFormOpen, onClick, close }) => {
	const icon = isFormOpen ? 'fa-times-circle' : 'fa-comment';
	const msgClass = close ? 'message message--close' : 'message';

	return (
		<div role="button" className={msgClass} onClick={onClick}>
			<i className={`fas ${icon}`}></i>
		</div>
	);
};

export default Message;
