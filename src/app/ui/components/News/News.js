import styles from './News.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '../NewsCard/NewsCard';


export default function News({className,  ...props }) {
  return (
	
	<main className={clsx(className, styles.news_list)}  {...props} id='essense'>
		
		<h1>Факультетське життя</h1>
		<div className={styles.card_item}><NewsCard /></div>
		<div className={styles.card_item}><NewsCard /></div>
		<div className={styles.card_item}><NewsCard /></div>
		<div className={styles.card_item}><NewsCard /></div>
		<div className={styles.card_item}><NewsCard /></div>
		<div className={styles.card_item}><NewsCard /></div>

		
	</main>
  );
}
