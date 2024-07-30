'use client';
import styles from './AdminContentAddArticle.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useState } from 'react';

export default function AdminContentAddArticle({ className,  ...props }) {
    const [title, setTitle] = useState('');
    const [titleLength, setTitleLength] = useState(0);
    const [error , setError] = useState(false);
    

   const  handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleLength(event.target.value.length);
    }

	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Назва публікації</label>
                    <input type="text" id="title" maxlength="120" onChange={handleTitleChange} value={title}/>
                    <span className={styles.char_count}>{titleLength}/120</span>
                </div>
                <div className={styles.form_group_row}>
                    <div className={styles.form_group}>
                        <label htmlFor="author">Автор</label>
                        <input type="text" id="author" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="category">Категорія</label>
                        <input type="text" id="category" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="date">Дата публікації</label>
                        <input type="date" id="date" />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="intro">Вступне слово</label>
                    <textarea id="intro" rows="5" placeholder="Вступне слово про тему та її актуальність"></textarea>
                </div>
                <div className={styles.form_group_button}>
                    <label>Завантажте файл для повного ознайомлення</label>
                    <p>Необхідний формат файлу: PDF</p>
                    <ButtonTag className={styles.upload_file} appearance={'primary'} >Завантажити файл</ButtonTag>
                    
                </div>
            </form>

		</content>
	);
}


