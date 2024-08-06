'use client';

import styles from './AdminContentTableArticles.module.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useGetArticles } from '../../../hooks/useSWR';
import Link from 'next/link';
import Image from 'next/image';
import AdminContentModal from '../AdminContentModal/AdminContentModal';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useRouter } from 'next/navigation';
import useAPI from '../../../hooks/useAPI';

export default function AdminContentTableArticles({ className, ...props }) {
  const router = useRouter();

  const [openDelete, setOpenDelete] = useState(false);

  const [publicationName, setPublicationName] = useState('');
  const [publicationId, setPublicationId] = useState('');
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);
  const [token, setToken] = useState('');

  const PAGE_SIZE = 6;


  const { articles, isValidating, isLoading, mutate } = useGetArticles(page, PAGE_SIZE);

  const { loading, error, delArticle } = useAPI();

  const handleOpenDelete = (id, name) => {
    setOpenDelete(true);
    setPublicationName(name);
    setPublicationId(id);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setPublicationName('');
    setPublicationId('');
  }



  const handleClickDelete = () => {
    const res = delArticle(publicationId, token);
    res.then(() => {
      mutate();
    })
    .catch((error) => {console.log('error', error)});
    handleCloseDelete();
    
  }

  useEffect(() => {
    setPublications([]);
    setPublicationId('');
    setPublicationName('');
    setPage(1);
  }, []);


  useEffect(() => {
    if (articles) {
      if (page === 1) {
        setPublications(articles.results);
      } else {
        setPublications((prevPublications) => [...prevPublications, ...articles.results]);
      }
    }
  }, [articles, page]);


  useEffect(() => {
    setToken(sessionStorage.getItem('token_faculty'))
  }, [token]);





  return (
      <content className={clsx(className, styles.content)}{...props}>
      <AdminContentModal open={openDelete} handleClose={handleCloseDelete}
        modal_header_text={'Ви впевнені, що хочете видалити цю публікацію?'}
        modal_content={publicationName}
        button1={<ButtonTag appearance={'delete-primary'} onClick={handleCloseDelete}>Відхилити</ButtonTag>}
        button2={<ButtonTag appearance={'delete-secondary'} onClick={handleClickDelete}>Видалити</ButtonTag>}
      />

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
              <td >{index + 1}</td>
              <td><Link href={`science/article/${publication.id}`}>{publication.title}</Link> </td>
              <td>{publication.author}</td>
              <td>{publication.category}</td>
              <td>{publication.date}</td>
              <td className={styles.action}>
                <button className={styles.edit} onClick={() => { router.push(`/admin/science/article/${publication.id}/edit`); }} aria-label="Delete"><Image src='/assets/icon-btn1.png' width='48' height='48' alt='Edit' /> </button>
                <button className={styles.delete} onClick={() => handleOpenDelete(publication.id, publication.title)} aria-label="Delete"><Image src='/assets/icon-btn2.png' width='48' height='48' alt='Delete' /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </content>
  );
}
