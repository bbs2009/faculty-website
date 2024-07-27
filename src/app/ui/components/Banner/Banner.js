import styles from './Banner.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner({className, header, description, banner_url, ...props }) {
	 
  return (
	<div className={clsx(className, styles.banner )}   {...props}>
		<div className={styles.text_block}>
			<h1>{header}</h1>
			<p>{description}</p>
		</div>
	
	</div>
  );
}
