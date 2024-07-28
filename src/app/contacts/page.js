import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';
import Contacts from '../ui/components/Contacts/Contacts';

export const metadata = {
  title: 'Контаки факультету',
  description: 'Контаки факультету комп\'ютерних наук та технологій',
}


export default function ContactsPage() {
  return (
	<>
	  <Header />
	  <Contacts />
	  <Footer />
	</>
  );
}