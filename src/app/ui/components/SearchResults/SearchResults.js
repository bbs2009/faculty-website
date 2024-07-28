'use client';

import styles from './SearchResults.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useGetArticles, useSearchArticles } from '../../../hooks/useAPI';
import ArticleDetailBack from '../ArticleDetailBack/ArticleDetailBack';



export default function SearchResults({ className,  searchString, ...props }) {
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);
  const [searchStringState, setSearchStringState] = useState('');
  const [searchArticleCount, setSearchArticleCount] = useState(0);

  const { articles, isValidating, isLoading, totalElements } = useSearchArticles(searchString, page, PAGE_SIZE);
  const isLoadingMore = isLoading || (page > 0 && publications && typeof publications[page - 1] === 'undefined');
  const isEmpty = publications && publications[0] && publications[0].length === 0;
  const isReachingEnd = isEmpty || (publications && publications.length < page);


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

  useEffect(() => {
    if (searchString) {
      setSearchStringState(searchString);
      setSearchArticleCount(totalElements);
      setPublications([]);
      
    }

    if (articles) {
      setPublications((prevPublications) => [...prevPublications, ...articles]);
    }
  }, [articles, searchString, totalElements]);



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
          <label for="search"></label>
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


     
      {isEmpty ? <p>Статті відсутні</p> : null}

      {publications.map((publication) => (
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
