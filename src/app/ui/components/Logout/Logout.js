'use client';

import styles from './Logout.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import ButtonTag from '../ButtonTag/ButtonTag';

export default function Logout({ className,  ...props }) {


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			
                <ButtonTag className={styles.login_button} appearance={'primary'}>Вийти з адмінпанелі</ButtonTag>
                
            
		</content>
	);
}
