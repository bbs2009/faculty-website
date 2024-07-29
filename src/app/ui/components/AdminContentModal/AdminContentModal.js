
import styles from './AdminContent.module.css';
import clsx from 'clsx';


export default function AdminContent({ className,  ...props }) {


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			
		</content>
	);
}
