import styles from './AdminArticleDetail.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import AdminArticleDetailBack from '../AdminArticleDetailBack/AdminArticleDetailBack';
import Image from 'next/image';
import {useGetArticleDetail} from '../../../hooks/useAPI';





export default function AdminArticleDetail({ className, article_id, ...props }) {

  const {article, isLoading, isError, downloadPDF} = useGetArticleDetail(article_id);
  if (isLoading) {
    return (
      <div className={clsx(className, styles.detail)} {...props}>
  
      <div className={styles.article_container_message}>
        <p>Завантажуємо статтю...</p>
      </div>     
    </div>
    )
  }

  if (isError) {
	  return (
      <div className={clsx(className, styles.detail)} {...props}>
      <AdminArticleDetailBack />
      <div className={styles.article_container_message}>
        
        <h2>Виникла помилка при завантаженні</h2>
      </div>     
    </div>
    )
  }

  if (!article) {
    return (
    <div className={clsx(className, styles.detail)} {...props}>
      <AdminArticleDetailBack />
      <div className={styles.article_container_message}>
        <p>Статтю не знайдено</p>
      </div>     
    </div>
    )
  }

  const { title, author, category, date, description} = article;
 
  const pubdate = date;

  

  return (
    <article className={clsx(className, styles.detail)} {...props} id='essense'>
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
            <span>{pubdate}</span>
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
