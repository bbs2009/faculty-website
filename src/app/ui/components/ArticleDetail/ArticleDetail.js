import styles from './ArticleDetail.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import ArticleDetailBack from '../ArticleDetailBack/ArticleDetailBack';
import Image from 'next/image';
import {useGetArticleDetail} from '../../../hooks/useSWR';
import {useEffect, useState} from 'react';




export default function ArticleDetail({ className, article_id, ...props }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const {article, isLoading, isError} = useGetArticleDetail(article_id);
 

    useEffect(() => {
    if (article) {
      setTitle(article.title);
      setAuthor(article.author);
      setCategory(article.category);
      setDate(article.date);
      setDescription(article.description);
      setFile(article.file);
      setIsEmpty(false);
    }
  }, [article]);

 
  const pubdate = date;
 
   const downloadPDF = () => {
    // console.log('downloadPDF', `${API_SERVER}/${file}`);
    const API_SERVER = process.env.NEXT_PUBLIC_APP_API_URL ;

    try {
      const downloadLink = document.createElement('a');
      downloadLink.href = `${API_SERVER}/${file}`;
      downloadLink.target = '_blank';
      downloadLink.rel = 'noopener noreferrer';
      downloadLink.download = 'file.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink)
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  }
  

  return (
    <article className={clsx(className, styles.detail)} {...props} id='essense'>
        <div className={styles.article_container}>
          <ArticleDetailBack />
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
