import styles from './SearchBanner.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import ButtonTag from '../ButtonTag/ButtonTag';

export default function SearchBanner() {

	return (
	<search className={styles.search}>
		
			<h2>Пошук публікацій</h2>
			<div className={styles.input_text}>
			<input type="text" placeholder="Введіть назву або ключове слово" />
			<ButtonTag appearance='primary'>Шукати</ButtonTag>
			</div>

	

	</search>
  );
}
