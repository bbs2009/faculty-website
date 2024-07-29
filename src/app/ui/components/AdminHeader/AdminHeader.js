
import styles from './AdminHeader.module.css';
import clsx from 'clsx';


export default function AdminHeader({ className, description_text, button1, button2, ...props }) {


	return (
		<header className={clsx(className, styles.header)}{  ...props}>
			<div className={styles.description_text}>
				<h1>{description_text}</h1>
			</div>
			
			{button1}
			{button2}
		</header>
	);
}
