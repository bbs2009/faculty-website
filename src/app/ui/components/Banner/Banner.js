import styles from './Banner.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner({className, header, description,  ...props }) {
	
  return (
	<banner className={clsx(className, styles.banner)}  {...props}>
		<div className={styles.text_block}>
			<h1>{header}</h1>
			<p>{description}</p>
		</div>
		
		

	</banner>
  );
}
