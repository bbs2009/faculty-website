'use client';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';
import AdminContentAddEditArticle from '@/app/ui/components/AdminContentAddEditArticle/AdminContentAddEditArticle';

import { useRouter } from 'next/navigation';

export default function AdminSciencePageAdd(...props) {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<AdminHeader description_text={'Створення публікації'}
				button1={<ButtonTag appearance={'edit-primary'} onClick={() => { router.push(`/admin/science/`); }}>Відхилити</ButtonTag>}
				button2={<ButtonTag appearance={'primary'}>Створити та зберегти</ButtonTag>}
				
			/>
			<AdminSidebar />
			
			<AdminContentAddEditArticle />
			<AdminFooter />

		</div>
	);
}