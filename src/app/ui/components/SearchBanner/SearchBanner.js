'use client';
import styles from './SearchBanner.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SearchBanner() {
	const [searchTerm, setSearchTerm] = useState('');
	const { replace } = useRouter();
	const pathname = usePathname();

	const searchHandler = () => {
		const params = new URLSearchParams();
		if (searchTerm) {
			params.set('query', searchTerm);
		} else {
			params.delete('query');
		}
	
		replace(`${pathname}/search/?${params.toString()}`);
	};

	const onChangeHandler = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className={styles.search}>
			<h2>Пошук публікацій</h2>
			<div className={styles.input_text}>
				<input
					type="text"
					placeholder="Введіть назву або ключове слово"
					value={searchTerm}
					onChange={onChangeHandler}
				/>
				<ButtonTag appearance='primary' onClick={searchHandler}>Шукати</ButtonTag>
			</div>



		</div>
	);
}
