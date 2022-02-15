import React from 'react';

import Button from '../Layout/Button';
import Message from '../Layout/Message';

const Form = ({ isFormOpen, onClick }) => {
	const isOpen = isFormOpen ? 'form form--isOpen' : 'form';

	return (
		<form className={isOpen}>
			<Message isFormOpen={isFormOpen} onClick={onClick} close={true} />
			<h3 className="form__title">
				Lorem ipsum
				<br /> Lorem ipsum lorem ipsum
			</h3>
			<p className="form__more">consectetur adipiscing elit. Ut auctor arcu</p>
			<h4 className="form__message">Zostaw kontakt, zadzwonimy do Ciebie</h4>
			<input
				className="form__textInput"
				type="text"
				placeholder="Imię i nazwisko"
			/>
			<input className="form__textInput" type="text" placeholder="Telefon" />
			<input className="form__textInput" type="text" placeholder="Email" />
			<input
				className="form__textInput"
				type="text"
				placeholder="Lorem ipsum lorem ipsum"
			/>
			<div className="form__checkbox">
				<input
					className="form__checkbox__input"
					type="checkbox"
					id="checkbox"
				/>
				<label htmlFor="checkbox" className="form__checkbox__label">
					Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
					więcej...
				</label>
			</div>
			<Button>Wyślij</Button>
		</form>
	);
};

export default Form;
