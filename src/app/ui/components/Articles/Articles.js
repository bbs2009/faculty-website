import styles from './Articles.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';


export default function Articles({className,  ...props }) {
  return (

	<articles className={clsx(className, styles.articles_list)}  {...props}>
		<h1>Усі публікації факультету</h1>
		<div className={styles.card_item}><ArticlesCard /></div>
		<div className={styles.card_item}><ArticlesCard /></div>
		<div className={styles.card_item}><ArticlesCard /></div>
		<div className={styles.card_item}><ArticlesCard /></div>
		<div className={styles.card_item}><ArticlesCard /></div>
		<div className={styles.card_item}><ArticlesCard /></div>

		<div className={styles.load_more}>
			<ButtonTag appearance='primary'>Завантажити ще</ButtonTag>
		</div>
	</articles>
	

	
  );
}
