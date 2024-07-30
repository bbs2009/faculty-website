'use client';
import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
	const router = useRouter();
  return (
	<div className={styles.container}>
	  <AdminHeader description_text={'Вихід з адмінпанелі'}
		button1={<ButtonTag appearance={'primary'} onClick={() => { router.push(`/`); }}>Вийти</ButtonTag>}
		
		
	  />
	  <AdminSidebar />
	  
	  {/* <Logout /> */}
	  <AdminFooter />

	</div>
  );
}