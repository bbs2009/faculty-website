
import Header from '../ui/components/Header/Header';
import Banner from '../ui/components/Banner/Banner';
import Footer from '../ui/components/Footer/Footer';
import SearchBanner from '../ui/components/SearchBanner/SearchBanner';
import Articles from '../ui/components/Articles/Articles';

export default function Science() {
	const header = 'Наукова робота';
	const description = 'Наукова робота в університеті здійснюється під егідою провідних академіків і дослідників, що забезпечують найвищий рівень досліджень. Ми заохочуємо студентів долучатися до наших дослідницьких груп, формуючи дослідницькі навички в рамках реальних проектів та проводячи роботи, які мають велику вагу у нашому сучасному технологічному світі.';
	const banner_url = '/assets/banner/banner1.png';
	return (
	<>
    <Header />
    <Banner header={header} description={description} />
	<SearchBanner />
	<Articles />
	<Footer />
	</>
  );
}
