import styles from './SkipLink.module.css';
import clsx from 'clsx';
import Image from 'next/image';


export default function SkipLink({className, appearance, children, ...props }) {
	  return ( 
		<>
			<a href="#essense" className={styles.skipLink}>Перейти до контенту</a>
		</>

  );
}