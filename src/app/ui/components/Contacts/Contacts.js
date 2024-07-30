'use client';
import styles from './Contacts.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useState } from 'react';

export const metadata = {
	title: "Контакти факультету ",
	description: "Контакти факультету комп\'ютерних наук та технологій ВУТД",
}

export default function Contacts({ className, ...props }) {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [message, setMessage] = useState('');
	const [messageError, setMessageError] = useState('');
	const [isError, setIsError] = useState(true);


	const onChangeHandler = (e) => {
		validateName(e.target.value);
		
		validateEmail(e.target.value);
		validateMessage(e.target.value);
	}


	const validateName = (name) => {
		
		if (name.length < 2 && name.length>0 || name.length > 50) {
			setNameError('*Ім\'я повинно містити від 2 до 50 символів');
			setIsError(true);
		} else {
			setNameError('');
			setIsError(false);
		}

		if (name ===''){
			setNameError('*Поле не може бути пустим');
			setIsError(true);
		}

	};
	
	const validateEmail = (email) => {
		if (email.length < 5 && email.length>0 || email.length > 100) {
			setEmailError('*Email повинно містити від 2 до 50 символів');
			setIsError(true);
		} else {
			setEmailError('');
			setIsError(false);
		}
		if (email ===''){
			setNameError('*Поле не може бути пустим');
			setIsError(true);
		}
	};
	
	const validateMessage = (message) => {
		if (message.length < 10 && message.length>0 || message.length > 2000) {
			setMessageError('*Повідомлення повинно містити від 10 до 2000 символів');
			setIsError(true);
		} else {
			setMessageError('');
			setIsError(false);
		}
		if (message ===''){
			setNameError('*Поле не може бути пустим');
			setIsError(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateName(e.target.value);
		validateEmail(e.target.value);
		validateMessage(e.target.value);

		if (!nameError && !emailError && !messageError) {
			console.log('Форма відправлена');
		}
	};

	return (
		<main className={clsx(className, styles.contacts)}  {...props} id='essense'>
			<div className={styles.contacts_block}>
				<div className={styles.contacts_info}>
					<h1>Контакти</h1>
					<h2>Адреса:</h2>
					<span>Вінницький університет технологій та дизайну, 21000, м. Вінниця, вул. Київська 43</span>
					<h3>Телефон:</h3>
					<span>+380 50 123 4567</span>
					<h3>Електронна пошта:</h3>
					<span>info@vutd.com.ua</span>
				</div>
			</div>
			<div className={styles.contacts_block2}>
				<div className={styles.contacts_form}>
					<h2>Написати нам</h2>
					<form onSubmit={handleSubmit}>
						<div className={styles.contacts_form_first_row}>

							<div className={styles.field}>
								<label htmlFor="name">Ім`&#39;`я</label>
								{isError ? <span className={styles.error} >{nameError}</span> : ''}
								<input type="text" name='name' placeholder="Ім'я" onChange={onChangeHandler} maxlength="50"/>
							</div>
							<div className={styles.field}>
								{isError ? <span className={styles.error} >{emailError}</span> : ''}
								<label htmlFor="email">Електронна адреса</label>
								<input type="email" placeholder="Email" required={true} onChange={onChangeHandler} maxlength="100"/>
							</div>
						</div>
						<div className={styles.contacts_form_second_row}>
							{isError ? <span className={styles.error} >{messageError}</span> : ''}
							<label htmlFor="message">Повідомлення</label>
							<textarea name="message" placeholder="Повідомлення" onChange={onChangeHandler} maxlength="2000"></textarea>
						</div>

						<ButtonTag appearance='primary' disabled={isError}>Надіслати</ButtonTag>

					</form>

				</div>
			</div>

			<iframe className={styles.contacts_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5035099779748!2d28.47205248740182!3d49.24790169761265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b5f28c12bc5%3A0x77f5b539abaaf3b!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNDMsINCS0LjQvdC90LjRhtCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1sru!2sua!4v1721687746667!5m2!1sru!2sua" height={531} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


		</main>
	);
}
