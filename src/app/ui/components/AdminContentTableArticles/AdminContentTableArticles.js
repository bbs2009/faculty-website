'use client';

import styles from './AdminContentTableArticles.module.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useGetArticles } from '../../../hooks/useAPI';
import Link from 'next/link';

export default function AdminContentTableArticles({ className,  ...props }) {

  const PAGE_SIZE = 6;
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

//   console.log(articles)

  
  const isLoadingMore = isLoading || (articles > 0 && articles && typeof articles[page - 1] === 'undefined');
  const isEmpty = articles && articles[0] && articles[0]?.length === 0;
  const isReachingEnd = isEmpty || (articles && articles.length < page);


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Назва публікації</th>
                        <th>Автор</th>
                        <th>Категорія</th>
                        <th>Дата публікації</th>
                        <th>Дія</th>
                    </tr>
                </thead>
                <tbody>
					{publications.map((publication, index) => (
                    <tr key={publication.id}>
                        <td >{index+1}</td>
                        <td><Link href={`science/article/${publication.id}`}>{publication.title}</Link> </td>
                        <td>{publication.author}</td>
                        <td>{publication.category}</td>
                        <td>{publication.date}</td>
                        <td className={styles.action}>
                            <button className={styles.edit}>✏️</button>
                            <button className={styles.delete}>🗑️</button>
                        </td>
                    </tr>
					))}	
                </tbody>
            </table>
		</content>
	);
}
