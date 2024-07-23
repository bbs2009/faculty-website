import styles from './ArticlesCard.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import ButtonTag from '../ButtonTag/ButtonTag';


export default function ArticlesCard({className,  ...props }) {
	  return ( 
	<card className={clsx(className, styles.card1)}  {...props}>
		<div className={styles.card_body}>
			<h3>Розробка алгоритму глибокого навчання для розпізнавання образів</h3>
			<span  className={styles.description}>Наш факультет комп'ютерних наук прагне створити студентам оптимальні умови для навчання та досліджень. Оновлені програми курсів, наближені до реальної динаміки ІТ-сфери, дозволяють студентам отримувати актуальні знання та вміння. Крім того, ми заохочуємо активну участь студентів у конференціях, семінарах та воркшопах.</span>
			<div className={styles.line}></div>
			<span className={styles.author}>Автор:</span>
			<span className={styles.author_name}>Іван Петренко</span>
			<ButtonTag appearance='secondary'>Читати далі</ButtonTag>
		</div>

		
		
	</card>
  );
}