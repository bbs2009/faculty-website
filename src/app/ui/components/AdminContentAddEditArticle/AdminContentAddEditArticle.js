
import styles from './AdminContentAddArticle.module.css';
import clsx from 'clsx';


export default function AdminContentAddArticle({ className,  ...props }) {


	return (
		<content className={clsx(className, styles.content)}{  ...props}>
			<form className={styles.publication_form}>
                <div className={styles.form_group}>
                    <label for="title">Назва публікації</label>
                    <input type="text" id="title" maxlength="120"/>
                    <span className={styles.char_count}>85/120</span>
                </div>
                <div className={styles.form_group_row}>
                    <div className={styles.form_group}>
                        <label for="author">Автор</label>
                        <input type="text" id="author" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="category">Категорія</label>
                        <input type="text" id="category" />
                    </div>
                    <div className={styles.form_group}>
                        <label for="date">Дата публікації</label>
                        <input type="date" id="date" />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label for="intro">Вступне слово</label>
                    <textarea id="intro" rows="5" placeholder="Вступне слово про тему та її актуальність"></textarea>
                </div>
                <div className={styles.form_group}>
                    <label>Завантажте файл для повного ознайомлення</label>
                    <p>Необхідний формат файлу: PDF</p>
                    <button type="button" className={styles.upload_file}>Завантажити файл</button>
                </div>
            </form>

		</content>
	);
}


