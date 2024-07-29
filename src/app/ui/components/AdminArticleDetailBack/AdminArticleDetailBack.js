import styles from './AdminArticleDetailBack.module.css';
import clsx from 'clsx';

import Link from 'next/link';
import Image from 'next/image';


export default function AdminArticleDetailBack({ ...props }) {
	return (
		<>
			<Link href='/admin/science' className={styles.back}>
				<Image src='/assets/left.png' alt='left' width='35' height='20' />
				<h3>До списку публікацій</h3>
			</Link>
		</>
	)
}