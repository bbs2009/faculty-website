'use client';

import styles from './page.module.css';
import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import AdminArticleDetail from '@/app/ui/components/AdminArticleDetail/AdminArticleDetail';
import AdminArticleDetailBack from '@/app/ui/components/AdminArticleDetailBack/AdminArticleDetailBack';

import { useParams } from 'next/navigation';

export default function AdminPageArticleDetail(...props) {
	const { id } = useParams()

	return (
		<div className={styles.container}>
			<AdminHeader description_text={'Деталі статті'} />

			<AdminSidebar />

			<AdminArticleDetail article_id={id} />
			<AdminFooter />
		</div>



	);
}