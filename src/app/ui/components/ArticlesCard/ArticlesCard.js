'use client';

import styles from './ArticlesCard.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';



export default function ArticlesCard({className, title, description, autor, article_id, onButtonClick, ...props }) {
	
	
	return ( 
	<div className={clsx(className, styles.card_container)}  {...props}>
		<div className={styles.card_body}>
			<h3>{title}</h3>
			<span  className={styles.description}>{description}</span>
			<div className={styles.line}></div>
			<span className={styles.author}>Автор:</span>
			<span className={styles.author_name}>{autor}</span>
			<ButtonTag appearance='secondary' onClick={onButtonClick} >Читати далі</ButtonTag>
		</div>
	</div>
  );
}