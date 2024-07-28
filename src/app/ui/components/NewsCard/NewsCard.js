import styles from './NewsCard.module.css';
import clsx from 'clsx';
import Image from 'next/image';


export default function NewsCard({className,  ...props }) {
	  return ( 
	<div className={clsx(className, styles.news_container)}  {...props}>
		<div className={styles.news_body}>
		<Image src='/assets/news_card/card1.png' width='400'  height='320' alt='картка1'/>	
		<h2 data-title>Динамічне академічне життя</h2>
		<div className={styles.line}></div>
		<span data-description className={styles.description}>Наш факультет комп&apos;ютерних наук прагне створити студентам оптимальні умови для навчання та досліджень. Оновлені програми курсів, наближені до реальної динаміки ІТ-сфери, дозволяють студентам отримувати актуальні знання та вміння. Крім того, ми заохочуємо активну участь студентів у конференціях, семінарах та воркшопах.</span>

		</div>
		
	</div>
  );
}