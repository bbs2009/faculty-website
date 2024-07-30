
import styles from './AdminContentAddArticle.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';

export default function AdminContentAddArticle({ className,  ...props }) {


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Назва публікації</label>
                    <input type="text" id="title" maxlength="120"/>
                    <span className={styles.char_count}>85/120</span>
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
                <div className={styles.form_group}>
                    <label>Завантажте файл для повного ознайомлення</label>
                    <p>Необхідний формат файлу: PDF</p>
                    <ButtonTag type="button" className={styles.upload_file}>Завантажити файл</ButtonTag>
                    
                </div>
            </form>

		</content>
	);
}


