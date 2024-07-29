import styles from './page.module.css';

import AdminSidebar from '../ui/components/AdminSidebar/AdminSidebar.js';
import AdminHeader from '../ui/components/AdminHeader/AdminHeader.js';
import AdminContent from '../ui/components/AdminContent/AdminContent.js';
import AdminFooter from '../ui/components/AdminFooter/AdminFooter.js';


export default function AdminPage(...props) {
	  return (
	<>
		<AdminHeader description_text={'Адмістративна панель'} />
	
		<AdminSidebar />
		<AdminContent />
		<AdminFooter/>	

	</>
	  );
}