'use client';
import styles from './AdminContentAddEditArticle.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useState, useEffect, useRef } from 'react';
import { useGetArticleDetail,  addArticle } from '../../../hooks/useSWR';



export default function AdminContentAddEditArticle({ className, article_id = '', ...props }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [titleLength, setTitleLength] = useState(0);
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [token, setToken] = useState('');

    const [error, setError] = useState(false);

    const inputFile = useRef(null);

    const { article, isLoading, isError } = useGetArticleDetail(article_id);

    useEffect(() => {
        if (article) {
            setTitle(article.title);
            setAuthor(article.author);
            setCategory(article.category);
            setDate(article.date);
            setDescription(article.description);
        }
    }, [article]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleLength(event.target.value.length);
        if (event.target.value.length > 120) {
            setError(true);
        } else {
            setError(false);
        }
    }


    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
        // setTitleLength(event.target.value.length);
        // if (event.target.value.length > 120) {
        //     setError(true);
        // } else {        
        //     setError(false);
        // }
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        // setTitleLength(event.target.value.length);
        // if (event.target.value.length > 120) {
        //     setError(true);
        // } else {        
        //     setError(false);
        // }
    }
    const handleDateChange = (event) => {
        setDate(event.target.value);
        // setTitleLength(event.target.value.length);
        // if (event.target.value.length > 120) {
        //     setError(true);
        // } else {        
        //     setError(false);
        // }
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);

    }

    // const {} = useLogin();

    // useEffect(() => {
    //     if (response) {
    //         response.then((data) => {
    //             setToken(data.accessToken);
    //         });
    //     }
    // }, [response]);

    const handleAddArticle = (e) => {
        e.preventDefault();
        // addArticle(title, author, category, date, description, file, fileName, token);
        // console.log(title, author, category, date, description, file, fileName, token);
    }

    const handleFileChange = (event) => {
        // console.log('event', event);
        const selectedFile = event.target.files[0];
        // console.log('event.target.files[0]', event.target.files[0])
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleButtonClick = () => {
        inputFile.current.click();
    };



    return (
        <content className={clsx(className, styles.content)}{...props}>
            {isLoading ? 'Завантажуємо статтю...' : null}
            {isError ? 'Виникла помилка при завантаженні' : null}
            {!article? 'Статтю не знайдено': null}
            <br/>
            {token ? token: 'Ви не авторизовані'}
           
            <form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Назва публікації</label>
                    <input type="text" id="title" className={error ? 'error' : null} maxLength="120" onChange={handleTitleChange} value={title} />
                    <span className={styles.char_count}>{titleLength}/120</span>
                </div>
                <div className={styles.form_group_row}>
                    <div className={styles.form_group}>
                        <label htmlFor="author">Автор</label>
                        <input type="text" id="author" value={author} onChange={handleAuthorChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="category">Категорія</label>
                        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="date">Дата публікації</label>
                        <input type="date" id="date" value={date ? new Date(date).toISOString().split('T')[0] : ''} onChange={handleDateChange} />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="intro">Вступне слово</label>
                    <textarea id="intro" rows="5" placeholder="Вступне слово про тему та її актуальність" value={description} onChange={handleDescriptionChange}></textarea>
                </div>
                <div className={styles.form_group_button}>
                    <label>Завантажте файл для повного ознайомлення</label>
                    <p>Необхідний формат файлу: PDF</p>
                    <p> {fileName? `Завантажено файл: ${fileName}`:null}</p>
                    
                    <input id="input_file" type="file" className={styles.input_file} ref={inputFile} onChange={handleFileChange} />
                    <ButtonTag className={styles.upload_file} appearance={'primary'} type="button" onClick={handleButtonClick} >Завантажити файл</ButtonTag>

                </div>
                <ButtonTag className={styles.submit_button} appearance={'primary'} type="submit" onClick={handleAddArticle}>Зберегти</ButtonTag>
            </form>



        </content>
    );
}


