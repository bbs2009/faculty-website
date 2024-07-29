'use client';
import { useParams } from 'next/navigation';

import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';
import AdminContentAddEditArticle from '@/app/ui/components/AdminContentAddEditArticle/AdminContentAddEditArticle';

export default function AdminSciencePageAdd(...props) {
	

	return (
		<>
			<AdminHeader description_text={'Створення публікації'}
				button1={<ButtonTag appearance={'primary'}>Відхилити</ButtonTag>}
				button2={<ButtonTag appearance={'primary'}>Створити та зберегти</ButtonTag>}
				
			/>
			<AdminSidebar />
			
			<AdminContentAddEditArticle />
			<AdminFooter />

		</>
	);
}