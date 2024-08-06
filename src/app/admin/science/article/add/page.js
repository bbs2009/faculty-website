'use client';

import styles from './page.module.css';
import AdminHeader from '@/app/ui/components/AdminHeader/AdminHeader';
import AdminSidebar from '@/app/ui/components/AdminSidebar/AdminSidebar';
import AdminFooter from '@/app/ui/components/AdminFooter/AdminFooter';
import ButtonTag from '@/app/ui/components/ButtonTag/ButtonTag';
import AdminContentAddEditArticle from '@/app/ui/components/AdminContentAddEditArticle/AdminContentAddEditArticle';
import useAPI from '@/app/hooks/useAPI';


import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminSciencePageAdd({...props}) {
	const router = useRouter();

	const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [titleLength, setTitleLength] = useState(0);
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [token, setToken] = useState('');
    const [openMsg, setOpenMsg] = useState(false);
    const [errorField, setErrorField] = useState(false);


	const { loading, error, addArticle } = useAPI();
	

	const handleClickSaveArticle = () => {
		
        const article_item = {
            title: title,
            author: author,
            category: category,
            date: date,
            description: description,
            file: file,
            fileName: fileName
        }
		console.log('article_item', article_item);
     
		addArticle(article_item, token)
                .then((data) => {
					router.push('/admin/science')
				})
                .catch((error) => { console.log('error', error); });
	} 

	 
	useEffect(() => {
        setToken(sessionStorage.getItem('token_faculty'))
    }, [token]);
	


    
	return (
		<div className={styles.container}>
			
			<AdminHeader description_text={'Створення публікації'}
				button1={<ButtonTag appearance={'edit-primary'} onClick={() => { router.push(`/admin/science/`); }}>Відхилити</ButtonTag>}
				button2={<ButtonTag appearance={'primary'} onClick={handleClickSaveArticle}>Створити та зберегти</ButtonTag>}
			/>
			<AdminSidebar />
			<AdminContentAddEditArticle 
			title={title} setTitle={setTitle}
			author={author} setAuthor={setAuthor}
			category={category} setCategory={setCategory}
			date={date} setDate={setDate}
			description={description} setDescription={setDescription}
			titleLength={titleLength} setTitleLength={setTitleLength}
			fileName={fileName} setFileName={setFileName}
			file={file} setFile={setFile}
			openMsg={openMsg} setOpenMsg={setOpenMsg}
			errorField={errorField} setErrorField={setErrorField}
			loading={loading} error={error}
			// isLoading={isLoading} isError={isError}

			/>
			<AdminFooter />

		</div>
	);
}