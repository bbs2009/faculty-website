'use client';
import styles from './AdminContentAddEditArticle.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useState, useEffect, useRef } from 'react';
import { useGetArticleDetail } from '../../../hooks/useAPI';



export default function AdminContentAddEditArticle({ className,   article_id = '', ...props }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [titleLength, setTitleLength] = useState(0);
    const [fileName, setFileName] = useState('');

    const [error, setError] = useState(false);
  
    const inputFile = useRef(null) 

    const handleFileChange = () => { 
    inputFile.current.click();
    const file = e.target.files[0];
    setFileName(file.name);
    };

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

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
 
    }

    // console.log('fileName', fileName);
    return (
        <content className={clsx(className, styles.content)}{...props}>
            {isLoading? 'Завантажуємо статтю...': null}
            {isError? 'Виникла помилка при завантаженні': null}
            {/* {!article? 'Статтю не знайдено': null} */}

            <form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Назва публікації</label>
                    <input type="text" id="title" className={error? 'error': null} maxLength="120" onChange={handleTitleChange} value={title} />
                    <span className={styles.char_count}>{titleLength}/120</span>
                </div>
                <div className={styles.form_group_row}>
                    <div className={styles.form_group}>
                        <label htmlFor="author">Автор</label>
                        <input type="text" id="author" value={author}/>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="category">Категорія</label>
                        <input type="text" id="category" value={category}/>
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="date">Дата публікації</label>
                        <input type="date" id="date" value={date ? new Date(date).toISOString().split('T')[0] : ''} />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="intro">Вступне слово</label>
                    <textarea id="intro" rows="5" placeholder="Вступне слово про тему та її актуальність" value={description} onChange={handleDescriptionChange}></textarea>
                </div>
                <div className={styles.form_group_button}>
                    <label>Завантажте файл для повного ознайомлення</label>
                    <p>Необхідний формат файлу: PDF</p>
                    <p>{fileName}</p>
                    <input id="input_file" type="file" className={styles.input_file} ref={inputFile} />
                    <ButtonTag className={styles.upload_file} appearance={'primary'} type="file"  onClick={handleFileChange} >Завантажити файл</ButtonTag>

                </div>
            </form>


            
        </content>
    );
}


