import styles from './Contacts.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard/NewsCard';
import ButtonTag from '../ButtonTag/ButtonTag';


export default function Contacts({className,  ...props }) {
  return (
	<contacts className={clsx(className, styles.contacts)}  {...props}>
		<div className={styles.contacts_block}>
			<h1>Контакти</h1>
			<div className={styles.contacts_info}>
				<h3>Адреса:</h3>
				<span>Вінницький університет технологій та дизайну, 21000, м. Вінниця, вул. Київська 43</span>
				<h3>Телефон:</h3>
				<span>+380 50 123 4567</span>
				<h3>Електронна пошта:</h3>
				<span>info@vutd.com.ua</span>
			</div>
		</div>
		<div className={styles.contacts_form}>
			<h2>Написати нам</h2>
			
			<label For="name">Ім'я</label>
			<input type="text" name='name' placeholder="Ім'я"/>
			<label For="email">Email</label>
			<input type="email" placeholder="Email"/>
			<label For="message">Повідомлення</label>
			<textarea placeholder="Повідомлення"></textarea>
			<ButtonTag appearance='primary'>Надіслати</ButtonTag>
		</div>
		{/* <div className={styles.contacts_map}> */}
			<iframe className={styles.contacts_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5035099779748!2d28.47205248740182!3d49.24790169761265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b5f28c12bc5%3A0x77f5b539abaaf3b!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNDMsINCS0LjQvdC90LjRhtCwLCDQktC40L3QvdC40YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1sru!2sua!4v1721687746667!5m2!1sru!2sua" height={531} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		{/* </div> */}

	</contacts>
  );
}
