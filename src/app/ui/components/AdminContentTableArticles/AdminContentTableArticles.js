'use client';

import styles from './AdminContentTableArticles.module.css';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useGetArticles } from '../../../hooks/useAPI';
import Link from 'next/link';
import Image from 'next/image';
import AdminContentModal from '../AdminContentModal/AdminContentModal';
import ButtonTag from '../ButtonTag/ButtonTag';

export default function AdminContentTableArticles({ className,  ...props }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState([]);
  
  const { articles, isValidating, isLoading } = useGetArticles(page, PAGE_SIZE);

  const handleOpenDelete = () =>   setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenEdit = () =>   setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);



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
      <AdminContentModal open={openDelete} handleClose={handleCloseDelete} 
        modal_body={<div>Ви впевнені, що хочете видалити цю публікацію?</div>}
        button1={<ButtonTag appearance={'delete-primary'} onClick={handleCloseDelete}>Відхилити</ButtonTag>}
				button2={<ButtonTag appearance={'secondary'}>Видалити</ButtonTag>}
      />
      <AdminContentModal open={openEdit} handleClose={handleCloseEdit} 
        modal_body={<div>Ви впевнені, що хочете редагувати цю публікацію?</div>}
        button1={<ButtonTag appearance={'edit-primary'} onClick={handleCloseEdit}>Відхилити</ButtonTag>}
				button2={<ButtonTag appearance={'secondary'}>Редагувати</ButtonTag>}
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
                        <td >{index+1}</td>
                        <td><Link href={`science/article/${publication.id}`}>{publication.title}</Link> </td>
                        <td>{publication.author}</td>
                        <td>{publication.category}</td>
                        <td>{publication.date}</td>
                        <td className={styles.action}>
                            <button className={styles.edit} onClick={handleOpenEdit} aria-label="Edit"><Image src='/assets/icon-btn1.png' width='48' height='48' alt='Edit'/> </button>
                            <button className={styles.delete}  onClick={handleOpenDelete} aria-label="Delete"><Image src='/assets/icon-btn2.png' width='48' height='48' alt='Delete'/> </button>
                        </td>
                    </tr>
					))}	
                </tbody>
            </table>
		</content>
	);
}
