'use client';
import styles from './page.module.css';

import AdminSidebar from '../ui/components/AdminSidebar/AdminSidebar.js';
import AdminHeader from '../ui/components/AdminHeader/AdminHeader.js';
import AdminContent from '../ui/components/AdminContent/AdminContent.js';
import AdminFooter from '../ui/components/AdminFooter/AdminFooter.js';
import {withAuth} from '../utils/withAuth.js';


function AdminPage() {


	  return (
	    
		<div className={styles.container}>
          <AdminHeader description_text={'Адмістративна панель'} />
	
		<AdminSidebar />
		<AdminContent />
		<AdminFooter/>	
        </div>
		


	  );
}
export default withAuth(AdminPage);