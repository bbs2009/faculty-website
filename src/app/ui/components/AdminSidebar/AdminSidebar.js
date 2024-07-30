'use client';

import styles from './AdminSidebar.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function AdminSidebar({ className, ...props }) {


	return (
		<sidebar className={clsx(className, styles.sidebar)}  {...props}>
			<div className={styles.logo}><Link href="/admin">
				
					<Image src='/assets/header/logo.png' width='57' height='55' alt='логотип'/></Link>
					<span>Факультет комп&apos;ютерних наук та технологій ВУТД</span>
	
				</div>
			<nav className={styles.nav}>
				<ul>
				<li ><Link href="/admin" >Про факультет</Link></li>
				<li ><Link href="/admin">Новини</Link></li>
				<li ><Link href="/admin">Адміністрація</Link></li>
				<li ><Link href="/admin/science">Наукова робота</Link></li>
				<li ><Link href="/admin">Контакти</Link></li>
				</ul>
			</nav>

			<div className={styles.logout}>
				<Link href="/admin/logout">Вийти</Link>
				
			</div>

		</sidebar>
	);
}
