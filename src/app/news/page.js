import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';

export const metadata = {
  title: 'Новини факультету',
  description: 'Новини на факультеті комп\'ютерних наук та технологій',
}


export default function FacultyNews() {
	  return (
	<>
	  <Header />
	  <h1>Новини факультету</h1>
	  <Footer />
	</>
  );
}