import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';

export const metadata = {
  title: 'Адміністрація факультету',
  description: 'Адміністрація факультету комп\'ютерних наук та технологій',
}


export default function Administration() {
	  return (
	<>
	  <Header />
	  
	  <h1>Адміністрація</h1>
	  <Footer />
	</>
  );
}