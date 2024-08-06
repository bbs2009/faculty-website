'use client';
import styles from './page.module.css';
import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminContent from '@/app/ui/components/AdminContent/AdminContent';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import AdminContentTableArticles from '@/app/ui/components/AdminContentTableArticles/AdminContentTableArticles';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';

import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/utils/withAuth';

function AdminSciencePage(...props) {
	const router = useRouter();
	return (
		   <div className={styles.container}>
          <AdminHeader description_text={'Наукова робота'}
				button1={<ButtonTag appearance={'primary'} onClick={() => { router.push(`/admin/science/article/add`); }}> + Створити публікацію</ButtonTag>}
			/>
			<AdminSidebar />
			<AdminContentTableArticles />
			<AdminFooter />
        </div>
			

		
	);
}
export default withAuth(AdminSciencePage);

