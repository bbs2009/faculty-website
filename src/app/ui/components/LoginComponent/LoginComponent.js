'use client';

import styles from './LoginComponent.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import ButtonTag from '../ButtonTag/ButtonTag';

export default function LoginComponent({ className,  ...props }) {


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<div className={styles.login_container}>
        <div className={styles.login_box}>
            <div className={styles.logo}>
                
                <Image src='/assets/header/logo.png' width='50' height='50' alt='логотип'/>
                <h1>Факультет комп'ютерних наук та технологій ВУТД</h1>
            </div>
            <div className={styles.logo_txt}>
            <h2 className={styles.login_box_h2}>Вхід</h2>
            <p className={styles.login_box_p}>Увійти як адміністратор</p>
            </div>

            <form className={styles.login_form}>
                <div className={styles.form_group}>
                    <label htmlFor="login">Логін</label>
                    <input type="text" id="login" required/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="password">Пароль</label>
                    <div className="password-wrapper">
                        <input type="password" id="password" required /> 
                        {/* <span className="password_toggle">👁️</span> */}
                    </div>
                </div>
                <div className={styles.form_group}>
                    
                </div>
                <ButtonTag className={styles.login_button} appearance={'primary'}>Увійти</ButtonTag>
                
            </form>
        </div>
    </div>
		</content>
	);
}
