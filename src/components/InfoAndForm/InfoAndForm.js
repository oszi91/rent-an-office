import React, { useState } from 'react';
import Message from '../Layout/Message';

import Form from './Form';
import MainInfo from './MainInfo';

const InfoAndForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const openFormHandle = () => {
		setIsFormOpen(prevState => !prevState);
	};

	return (
		<div className="infoAndContact">
			<Message isFormOpen={isFormOpen} onClick={openFormHandle} />
			<MainInfo />
			<Form isFormOpen={isFormOpen} onClick={openFormHandle} />
		</div>
	);
};

export default InfoAndForm;
