
'use client';

import { useParams } from 'next/navigation';
import ArticleDetail from '@/app/ui/components/ArticleDetail/ArticleDetail';
import Header from '@/app/ui/components/Header/Header';
import Footer from '@/app/ui/components/Footer/Footer';




export default function ArticleDetailPage(...props) {
	
	const { id } = useParams()
	

return (
	<>
	<Header />
	<ArticleDetail article_id={id}  />
	<Footer />
	</>
)
}