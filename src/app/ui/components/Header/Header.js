'use client';

import styles from './Header.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Header({className,  ...props }) {
	const pathname = usePathname();
  return (
	<header className={clsx(className, styles.header)}  {...props}>
		<nav className={styles.nav}>
			<ul>
				<div className={styles.logo}><Link href="/">
				{/* <li className={styles.logo}><Link href="/"> */}
					<Image src='/assets/header/logo.png' width='57' height='65' alt='логотип'/></Link>
					<span>Факультет комп'ютерних наук та технологій ВУТД</span>
				{/* </li>	 */}
				</div>

			
				<li ><Link href="/about">Про факультет</Link></li>
				<li ><Link href="/news">Новини</Link></li>
				<li ><Link href="/administration">Адміністрація</Link></li>
				<li ><Link href="/science">Наукова робота</Link></li>
				<li ><Link href="/contacts">Контакти</Link></li>
			</ul>
		</nav>
	</header>
  );
}
