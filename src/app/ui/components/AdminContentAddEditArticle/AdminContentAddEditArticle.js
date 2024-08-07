'use client';
import styles from './AdminContentAddEditArticle.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import { useRef } from 'react'; 


export default function AdminContentAddEditArticle({ className, ...props }) {
    const {
        title,  setTitle, author, setAuthor, category, 
        setCategory, date, setDate, description, setDescription,
        titleLength, setTitleLength, fileName, setFileName,
        file, setFile, errorField, setErrorField,
        openMsg, setOpenMsg,
        isLoading, isError, loading, error
    } = props;
    
    const inputFile = useRef(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleLength(event.target.value.length);
        if (event.target.value.length > 120) {
            setErrorField(true);
        } else {
            setErrorField(false);
        }
    }


    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);

    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);

    }
    const handleDateChange = (event) => {
        setDate(event.target.value);

    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);

    }

    const handleFileChange = (event) => {
        // console.log('event', event);
        const selectedFile = event.target.files[0];
        // console.log('event.target.files[0]', event.target.files[0])
        // console.log('selectedFile', selectedFile);
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

            {isLoading || loading ? 'Завантажуємо статтю...' : null}
            {isError || error ? 'Виникла помилка при завантаженні' : null}
            {/* {!article? 'Статтю не знайдено': null} */}
            <br />
            

            <form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Назва публікації</label>
                    <input type="text" id="title" className={errorField ? 'error' : null} maxLength="120" onChange={handleTitleChange} value={title} />
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
                    <p> {fileName ? `Завантажено файл: ${fileName}` : null}</p>

                    <input id="input_file" type="file" className={styles.input_file} ref={inputFile} onChange={handleFileChange} />
                    <ButtonTag className={styles.upload_file} appearance={'primary'} type="button" onClick={handleButtonClick} >Завантажити файл</ButtonTag>

                </div>
            </form>



        </content>
    );
}


