'use client';
import Header from '@/app/ui/components/Header/Header'
import Footer from '@/app/ui/components/Footer/Footer'
import Articles from '@/app/ui/components/Articles/Articles'
import { useSearchParams } from 'next/navigation';

export default function SearchResults() {
	// const { searchString } = useParams()
	const searchParams = useSearchParams();
	console.log('searchParams',searchParams.get('query')?.toString());
	const pageType='search';
	const searchString = searchParams.get('query')?.toString();
	// searchString={searchParams}

return (
	<>
		<Header />


		<Articles pageType={pageType} searchString={searchString} />
		<Footer />
	</>
)
}