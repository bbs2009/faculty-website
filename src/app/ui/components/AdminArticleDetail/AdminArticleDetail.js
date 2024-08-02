import styles from './AdminArticleDetail.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import AdminArticleDetailBack from '../AdminArticleDetailBack/AdminArticleDetailBack';
import Image from 'next/image';
import {useGetArticleDetail} from '../../../hooks/useSWR';
import { useEffect,useState } from 'react';





export default function AdminArticleDetail({ className, article_id, ...props }) {
     const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

  const {article, isLoading, isError, downloadPDF} = useGetArticleDetail(article_id);
  // if (isLoading) {
  //   return (
  //     <div className={clsx(className, styles.detail)} {...props}>
  
  //     <div className={styles.article_container_message}>
  //       <p>Завантажуємо статтю...</p>
  //     </div>     
  //   </div>
  //   )
  // }

  // if (isError) {
	//   return (
  //     <div className={clsx(className, styles.detail)} {...props}>
  //     <AdminArticleDetailBack />
  //     <div className={styles.article_container_message}>
        
  //       <h2>Виникла помилка при завантаженні</h2>
  //     </div>     
  //   </div>
  //   )
  // }

  // if (!article) {
  //   return (
  //   <div className={clsx(className, styles.detail)} {...props}>
  //     <AdminArticleDetailBack />
  //     <div className={styles.article_container_message}>
  //       <p>Статтю не знайдено</p>
  //     </div>     
  //   </div>
  //   )
  // }

  useEffect(() => {
        if (article) {
            setTitle(article.title);
            setAuthor(article.author);
            setCategory(article.category);
            setDate(article.date);
            setDescription(article.description);
            setIsEmpty(false);
        }
    }, [article]);


  

  return (
    <article className={clsx(className, styles.detail)} {...props} >
        {isLoading? 'Завантажуємо статтю...': null}
        {isError? 'Виникла помилка при завантаженні': null}
        {isEmpty && !isLoading && !isError ? 'Статтю не знайдено': null}
        
        <div className={styles.article_container}>
          <AdminArticleDetailBack />
        <div className={styles.container_header}>
          <h1>{title}</h1>
        </div>
        <div className={styles.container_subheader}>
            <div className={styles.author}>
            <span >Автор: </span>
            <span>{author}</span>
            </div>
            <div className={styles.category}>
            <span>Категорія: </span>
            <span>{category}</span>
            </div>
            <div className={styles.pubdate}>
            <span>Дата публікації: </span>
            <span>{date}</span>
            </div>
        </div>
        
        
        <div className={styles.container_summary}>
          <p>{description}</p>
        </div>
        <div className={styles.container_full_text}>
          <ButtonTag appearance='primary' onClick={downloadPDF}>
            <Image src='/assets/down.png' width='20' height='20' alt=''  />Завантажити весь текст 
          </ButtonTag>
        </div>
      </div>
    </article>
  )
}
