'use client';

import styles from './SearchResults.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';

import {useSearchArticles} from '@/app/hooks/useSWR';
import ArticleDetailBack from '../ArticleDetailBack/ArticleDetailBack';



export default function SearchResults({ className,  searchString, ...props }) {
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const [findedPublications, setFindedPublications] = useState([]);
  const [searchStringState, setSearchStringState] = useState('');
  const [searchArticleCount, setSearchArticleCount] = useState(0);

  // console.log('searchString', searchString);
  const { articles, isValidating, isLoading } = useSearchArticles(searchString, page);



  const searchHandler = () => {
		const params = new URLSearchParams();
		if (searchStringState) {
			params.set('query', searchStringState);
		} else {
			params.delete('query');
		}
	
		replace(`${pathname}/?${params.toString()}`);
	};

	const onChangeHandler = (e) => {
		setSearchStringState(e.target.value);
    
	};

  // console.log('articles', articles);

  useEffect(() => {
    setFindedPublications([]);
    setSearchStringState(searchString);
    setSearchArticleCount(0);


    setPage(1);
  }, []);


  useEffect(() => {
    if (articles) {
      // console.log('articles.results.count', articles.results.length);
      if (page === 1) {
        setFindedPublications(articles.results);
        setSearchArticleCount(articles.results?.length);
      } else {
        setFindedPublications((prevPublications) => [...prevPublications, ...articles.results]);
        setSearchArticleCount(articles.results?.length);
      }
    }
  }, [articles, page]);


  return (
    <main className={clsx(className, styles.articles_list)} {...props} id='essense'>
      <ArticleDetailBack />
      <h1 className={styles.h1_search}>Результати пошуку:</h1>
       <div className={styles.search_result}>
         < span>
         За пошуковим запитом <span className={styles.search_result_bold}>{searchStringState}</span> було знайдено <span className={styles.search_result_bold}> {searchArticleCount} статей</span>
         </span>
      </div>
      
      <div className={styles.input_text_group}>
        <div className={styles.input_text}>
          <label htmlFor="search"></label>
          <input
            type="text"
            name='search'
            id='search'
            placeholder="Введіть назву або ключове слово"
            value={searchStringState}
            onChange={onChangeHandler}
          />
          <ButtonTag appearance='primary' onClick={searchHandler}>Шукати</ButtonTag>
        </div> 
			</div>


     
      {/* {isEmpty ? <p>Статті відсутні</p> : null} */}

      {findedPublications.map((publication) => (
        <div className={styles.card_item} key={publication.id}>
          <ArticlesCard
            className={styles.card_item}
            key={publication.id}
            title={publication.title}
            description={publication.description}
            autor={publication.author}
            article_id={publication.id}
            onButtonClick={() => { router.push(`/science/article/${publication.id}`); }}
          />
        </div>
      ))}
      
    </main>
  );
}
