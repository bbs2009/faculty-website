'use client';
import Header from '@/app/ui/components/Header/Header'
import Footer from '@/app/ui/components/Footer/Footer'
import SearchResults from '@/app/ui/components/SearchResults/SearchResults'


import { useSearchParams } from 'next/navigation';


export default function SearchResultsPage() {
	const searchParams = useSearchParams();
	
	const searchString = searchParams.get('query')?.toString();
	// console.log('searchString',searchString);	
return (
	<>
		<Header />
		<SearchResults searchString={searchString}/>	

		<Footer />
	</>
)
}
