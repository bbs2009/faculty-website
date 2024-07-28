import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';

export const metadata = {
  title: 'Про факультет',
  description: 'Про факультет комп\'ютерних наук та технологій',
}


export default function About() {
  return (
	<>
	  <Header />
	  
	  <h1>Про факультет</h1>
	  <Footer />
	</>
  );
}