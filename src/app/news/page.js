import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';
import SkipLink from '../ui/components/SkipLink/SkipLink';

export const metadata = {
  title: 'Новини факультету',
  description: 'Новини на факультеті комп\'ютерних наук та технологій',
}


export default function FacultyNews() {
	  return (
	<>
	<SkipLink />
	  <Header />
	  <h1>Новини факультету</h1>
	  <Footer />
	</>
  );
}