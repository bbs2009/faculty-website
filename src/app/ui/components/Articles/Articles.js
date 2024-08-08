'use client';

import styles from './Articles.module.css';
import clsx from 'clsx';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useGetArticles } from '../../../hooks/useSWR';
import { set } from 'date-fns';


export default function Articles({ className, ...props }) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isReachingEnd, setIsReachingEnd] = useState(false);
  const [loadArticles, setLoadArticles] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const { articles, isValidating, isLoading, error } = useGetArticles(page);

  useEffect(() => {
    if (typeof articles === 'undefined') {
    setIsEmpty(true);
    setIsReachingEnd(true);

  } else if (articles && articles.results.length === 0) {
    setIsEmpty(true);
    setLoadArticles(false);
    setIsReachingEnd(true);

  } else if (articles && articles.results.length > 0 && articles.next === null) {
    setIsEmpty(false);
    setLoadArticles(true);
    setIsReachingEnd(true);

  } else if (articles && articles.results.length > 0 && articles.next !== null) {
    setIsEmpty(false);
    setLoadArticles(true);
    setIsReachingEnd(false);
    
    }

  if (error) {
    setIsError(true);
    setErrorText('Failed to load articles');
  }    

  },[articles, isEmpty, isReachingEnd, loadArticles, page, error]);



  
  useEffect(() => {
    if(loadArticles) {

      if (articles) {
      setPublications([...publications, ...articles.results]);
      }
  
    }

  }
  ,[loadArticles, articles, page]);


  

  return (
      <main className={clsx(className, styles.articles_list)} {...props} id='essense'>
      <h1 className={styles.h1_main}>Наукова робота:</h1>
      
      {/* {isEmpty ? <p>Статті відсутні</p> : null} */}
      {/* {isError ? <p>Помилка завантаження статей:</p> : null} */}

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
      <div className={styles.load_more}>
        {isReachingEnd || isEmpty ? (
          <ButtonTag appearance='primary' disabled>
            Статті відсутні
          </ButtonTag>
        ) : (
          <ButtonTag appearance='primary' onClick={()=>setPage((prev)=>prev+1)}>
            Завантажити ще
          </ButtonTag>
        )}
      </div>
    </main>
  );
}