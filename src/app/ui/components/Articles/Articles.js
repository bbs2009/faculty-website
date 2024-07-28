'use client';

import styles from './Articles.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';
import {useGetArticles, useSearchArticles} from '../../../hooks/useAPI';
import ArticleDetailBack from '../ArticleDetailBack/ArticleDetailBack';


const get_search_api=(pageType, page, PAGE_SIZE, searchString)=>{
	if (pageType==='default'){

		const {articles, isValidating, isLoading} = useGetArticles(page, PAGE_SIZE);

		return {articles, isValidating, isLoading}

	}else if(pageType==='search'){

		const {articles, isValidating, isLoading, totalElements} = useSearchArticles(searchString, page, PAGE_SIZE);
	
		return {articles, isValidating, isLoading, totalElements}
	}
}

export default function Articles({className, pageTitle, pageType='default', searchString, ...props }) {
	const router = useRouter();
	const PAGE_SIZE = 6;
	const [page, setPage] = useState(1);
	const [publications, setPublications] = useState([]);
	const [searchStringState, setSearchStringState] = useState('');
	const [searchArticleCount, setSearchArticleCount] = useState(0);

	const {articles, isValidating, isLoading, totalElements} = get_search_api(pageType, page, PAGE_SIZE, searchString);
	

	useEffect(() => {
		if(searchString){
			setSearchStringState(searchString);
			setSearchArticleCount(totalElements);
			setPublications([]);
		}
		
		if(articles){
			setPublications([...publications, ...articles])
		}
	}, [articles])

	
  	const isLoadingMore = isLoading || (page > 0 && publications && typeof publications[page - 1] === "undefined");
  	const isEmpty = publications && publications[0] && publications[0].length === 0
  	const isReachingEnd =  isEmpty || (publications && publications.length  < page);
  	// const isRefreshing = isValidating && articles && articles.length === page;


  return (
	<div className={clsx(className, styles.articles_list)}  {...props}>
		{pageType === 'default' ? <h1 className={styles.h1_main}>Наукова робота:</h1> : null}
		{pageType === 'search' ? <SearchResults searchStringState={searchStringState} searchArticleCount={searchArticleCount} /> : null}
		
		
			{isEmpty ? <p>Статті відстуні</p> : null}

			{publications.map((publication) => {
				return (
					<div className={styles.card_item} key={publication.id}>
						<ArticlesCard 
						className={styles.card_item}
						key={publication.id}
						title={publication.title}
						description={publication.description}
						autor={publication.author}
						article_id={publication.id}
						onButtonClick={()=>{router.push(`/science/article/${publication.id}`)}}
					/>
					</div>
			)}
		)}
		<div className={styles.load_more}>

			{isReachingEnd ? <ButtonTag appearance='primary' disabled={true} onClick={() => setPage(page + 1)}>Статті відсутні</ButtonTag> : <ButtonTag appearance='primary' onClick={() => setPage(page + 1)}>Завантажити ще</ButtonTag>}
			
		</div>
	</div>
  );
}

function SearchResults({searchStringState, searchArticleCount}){
	return(
		<>
		<ArticleDetailBack />
		<h1 className={styles.h1_search}>Результати пошуку:</h1>
		<span className={styles.search_result}>За пошуковим запитом <span className={styles.search_result_bold}>{searchStringState}</span> було знайдено  <span className={styles.search_result_bold}> {searchArticleCount} статей`</span></span>
		</>
	)
}
