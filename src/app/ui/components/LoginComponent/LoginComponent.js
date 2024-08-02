'use client';

import styles from './LoginComponent.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import ButtonTag from '../ButtonTag/ButtonTag';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAPI from '../../../hooks/useAPI';

export default function LoginComponent({ className,  ...props }) {
    const [loginField, setLoginField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    // const [error , setError] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [isLoginError, setIsLoginError] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter();
    const {loading, error, login} = useAPI();

    const handleLoginChange = (event) => {
        event.preventDefault();
        setLoginField(event.target.value);

    }

    const handlePasswordChange = (event) => {   
        event.preventDefault();
        setPasswordField(event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        event.preventDefault();
        // setIsLoading(true);
        
            login(loginField, passwordField)
                .then((token) => {
                    sessionStorage.setItem('token_faculty', token);
                    router.push('/admin');
                    setIsLoginError(false);
                })
                .catch((error) => {
                    console.error('Error during login:', error)
                    setIsLoginError(true);
            });
            
           
       
        
    }
    
    
    
    
    // try {
    //   const result =  useLogin(login, password); // Виклик функції логіну з хуком
    //   if (result.accessToken) {
    //     setAccessToken(result.accessToken);
    //     localStorage.setItem('accessToken', result.accessToken);
    //     window.location.href = '/admin';
    //   } else {
    //     setIsLoginError(true);
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    //   setIsLoginError(true);
    // } finally {
    //   setIsLoading(false);
    // }
    // }
    

    // useEffect(() => {
    //     if (isLoginError) {
    //         setError(true);
    //     } else {
    //         setError(false);
    //     }
    // }, [isLoginError]);

    // useEffect(() => {
    //     if (accessToken) {

    //         localStorage.setItem('accessToken', accessToken);
    //         // console.log('accessToken', accessToken);
    //         window.location.href = '/admin';
    //     }
    // }, [accessToken]);



	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<div className={styles.login_container}>
        <div className={styles.login_box}>
            <div className={styles.logo}>
                
                <Image src='/assets/header/logo.png' width='50' height='50' alt='логотип'/>
                <h1>Факультет комп&apos;ютерних наук та технологій ВУТД</h1>
            </div>
            <div className={styles.logo_txt}>
            <h2 className={styles.login_box_h2}>Вхід</h2>
            <p className={styles.login_box_p}>Увійти як адміністратор</p>
            </div>

            <form className={styles.login_form}>
                <div className={styles.form_group}>
                    <label htmlFor="login">Логін</label>
                    <input type="text" id="login" required value={loginField} onChange={handleLoginChange}/>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="password">Пароль</label>
                    <div className="password-wrapper">
                        <input type="password" id="password" required value={passwordField} onChange={handlePasswordChange}/> 
                        {/* <span className="password_toggle">👁️</span> */}
                    </div>
                </div>
                <div className={styles.form_group}>
                    
                </div>
                <ButtonTag className={styles.login_button} appearance={'primary'} type="submit" disabled={loading} onClick={handleLogin}>
                    {loading ? 'Завантаження...' : 'Увійти'}
                </ButtonTag>
                
            </form>
        </div>
    </div>
		</content>
	);
}
