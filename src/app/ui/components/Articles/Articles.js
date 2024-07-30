'use client';

import styles from './Articles.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useGetArticles } from '../../../hooks/useAPI';


export default function Articles({ className, ...props }) {
  const router = useRouter();
  const PAGE_SIZE = 2;
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);

  const { articles, isValidating, isLoading } = useGetArticles(page, PAGE_SIZE);

  useEffect(() => {
    setPublications([]); 
    setPage(1); 
  }, []);

  
  useEffect(() => {
    if (articles) {
      if (page === 1) {
        setPublications(articles); 
      } else {
        setPublications((prevPublications) => [...prevPublications, ...articles]); 
      }
    }
  }, [articles, page]);


  
  const isLoadingMore = isLoading || (articles > 0 && articles && typeof articles[page - 1] === 'undefined');
  const isEmpty = articles && articles[0] && articles[0]?.length === 0;
  const isReachingEnd = isEmpty || (articles && articles.length < page);

  // console.log('isLoading', isLoading);
  // console.log('isLoadingMore', isLoadingMore);
  // console.log('isEmpty', isEmpty);
  // console.log('isReachingEnd', isReachingEnd);
  // console.log('page', page);
  // console.log('articles', articles);
  // console.log('articles[0].length', articles?.length);

  return (
      <main className={clsx(className, styles.articles_list)} {...props} id='essense'>
      <h1 className={styles.h1_main}>Наукова робота:</h1>
      
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
      <div className={styles.load_more}>
        {isReachingEnd ? (
          <ButtonTag appearance='primary' disabled>
            Статті відсутні
          </ButtonTag>
        ) : (
          <ButtonTag appearance='primary' onClick={() => setPage(page + 1)}>
            Завантажити ще
          </ButtonTag>
        )}
      </div>
    </main>
  );
}

