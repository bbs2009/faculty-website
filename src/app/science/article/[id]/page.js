
'use client';

import { useParams } from 'next/navigation';
import ArticleDetail from '@/app/ui/components/ArticleDetail/ArticleDetail';
import Header from '@/app/ui/components/Header/Header';
import Footer from '@/app/ui/components/Footer/Footer';

// export const metadata = {
//   title: 'Деталі статті',
//   description: 'Деталі статті факультету комп\'ютерних наук та технологій',
// }



export default function ArticleDetailPage(...props) {
	

	const { id } = useParams()
	

return (
	<>
	<title>Деталі статті</title>
	
	<Header />
	<ArticleDetail article_id={id}  />
	<Footer />
	</>
)
}