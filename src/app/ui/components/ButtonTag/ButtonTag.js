import styles from './ButtonTag.module.css';
import clsx from 'clsx';
import Image from 'next/image';


export default function ButtonTag({className, appearance, children, ...props }) {
	  return ( 
		<button type='button'
			className={clsx(styles.button, className, {
			[styles.primary]: appearance == 'primary',
			[styles.delete_primary]: appearance == 'delete-primary',
			[styles.edit_primary]: appearance == 'edit-primary',
			[styles.secondary]: appearance == 'secondary',})}
			{...props}>
			{children}	
		</button>
  );
}