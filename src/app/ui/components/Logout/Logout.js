'use client';

import styles from './Logout.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter

 } from 'next/navigation';
import ButtonTag from '../ButtonTag/ButtonTag';

export default function Logout({ className,  ...props }) {
	const router = useRouter();

	const handleLogout = (event) => {
		event.preventDefault();
		sessionStorage.removeItem('token_faculty');
		router.reload();
		router.push('/');
	}

	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			
                <ButtonTag className={styles.login_button} appearance={'primary'} onClick={handleLogout} >Вийти з адмінпанелі</ButtonTag>
                
            
		</content>
	);
}
