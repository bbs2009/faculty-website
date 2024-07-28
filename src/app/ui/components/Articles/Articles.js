'use client';

import styles from './Articles.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ArticlesCard from '../ArticlesCard/ArticlesCard';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useGetArticles, useSearchArticles } from '../../../hooks/useAPI';
import ArticleDetailBack from '../ArticleDetailBack/ArticleDetailBack';

// function useArticles(pageType, page, PAGE_SIZE, searchString) {
//   if (pageType === 'default') {
//     return useGetArticles(page, PAGE_SIZE);
//   } else if (pageType === 'search') {
//     return useSearchArticles(searchString, page, PAGE_SIZE);
//   }
// }

export default function Articles({ className, ...props }) {
  const router = useRouter();
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);
  // const [searchStringState, setSearchStringState] = useState('');
  // const [searchArticleCount, setSearchArticleCount] = useState(0);

  const { articles, isValidating, isLoading } = useGetArticles(page, PAGE_SIZE);

  useEffect(() => {
    // if (searchString) {
    //   setSearchStringState(searchString);
    //   setSearchArticleCount(totalElements);
    //   setPublications([]);
    // }

    if (articles) {
      setPublications((prevPublications) => [...prevPublications, ...articles]);
    }
  }, [articles]);

  const isLoadingMore = isLoading || (page > 0 && publications && typeof publications[page - 1] === 'undefined');
  const isEmpty = publications && publications[0] && publications[0].length === 0;
  const isReachingEnd = isEmpty || (publications && publications.length < page);

  return (
    <div className={clsx(className, styles.articles_list)} {...props}>
      <h1 className={styles.h1_main}>Наукова робота:</h1>
      {/* {pageType === 'search' ? <SearchResults searchStringState={searchStringState} searchArticleCount={searchArticleCount} /> : null} */}

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
    </div>
  );
}

// function SearchResults({ searchStringState, searchArticleCount }) {
//   return (
//     <>
//       <ArticleDetailBack />
//       <h1 className={styles.h1_search}>Результати пошуку:</h1>
//       <span className={styles.search_result}>
//         За пошуковим запитом <span className={styles.search_result_bold}>{searchStringState}</span> було знайдено
//         <span className={styles.search_result_bold}> {searchArticleCount} статей</span>
//       </span>
//     </>
//   );
// }
