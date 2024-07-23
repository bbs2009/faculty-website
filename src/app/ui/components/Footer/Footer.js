import styles from './Footer.module.css';
import clsx from 'clsx';
import {format} from 'date-fns/format';
import Image from 'next/image';


export default function Footer({className,  ...props }) {
	  return ( 
	<footer className={clsx(className, styles.footer)}  {...props}>
		<div className={styles.info_university}>
			<span> © 1990-{format(new Date(), 'yyyy')} Вінницький університет технологій та дизайну </span>
		</div>
		<div className={styles.info}><Image src='/assets/footer/pin_drop.png' width='24' height='24' alt='адреса'/><span>21000, м. Вінниця, вул. Київська 43</span></div>
		<div className={styles.info}><Image src='/assets/footer/email.png' width='24' height='24' alt='email'/><span>info@vutd.com.ua</span></div>
		<div className={styles.info}> <Image src='/assets/footer/phone.png' width='24' height='24' alt='тел.'/><span>+380 50 123 4567</span> </div>
	</footer>
  );
}