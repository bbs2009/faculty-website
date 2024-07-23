import styles from './NewsCard.module.css';
import clsx from 'clsx';
import Image from 'next/image';


export default function NewsCard({className,  ...props }) {
	  return ( 
	<card className={clsx(className, styles.container)}  {...props}>
		<Image src='/assets/news_card/card1.png' width='512'  height='320' alt='картка1'/>
		<h3>Динамічне академічне життя</h3>
		<div className={styles.line}></div>
		<span>Наш факультет комп'ютерних наук прагне створити студентам оптимальні умови для навчання та досліджень. Оновлені програми курсів, наближені до реальної динаміки ІТ-сфери, дозволяють студентам отримувати актуальні знання та вміння. Крім того, ми заохочуємо активну участь студентів у конференціях, семінарах та воркшопах.</span>
	</card>
  );
}