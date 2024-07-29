'use client';
import { useParams } from 'next/navigation';

import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';

import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import AdminArticleDetail from '@/app/ui/components/AdminArticleDetail/AdminArticleDetail';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';

export default function AdminSciencePageItem(...props) {
	const { id } = useParams()

	return (
		<>
			<AdminHeader description_text={'Наукова робота'}
				button1={<ButtonTag appearance={'primary'}>Редагувати</ButtonTag>}
			/>
			<AdminSidebar />
			<AdminArticleDetail article_id={id}/>
			
			<AdminFooter />

		</>
	);
}