import styles from './ArticleDetail.module.css';
import clsx from 'clsx';
import ButtonTag from '../ButtonTag/ButtonTag';
import Link from 'next/link';
import Image from 'next/image';


export default function ArticleDetail({ className, ...props }) {
	return (

		<detail className={clsx(className, styles.detail)}  {...props}>
			<div className={styles.article_container}>

				<Link href='/science' className={styles.container_back}>
					<Image src='/assets/left.png' alt='left' width='35' height='20' />
					<h3>До списку публікацій</h3>
				</Link>



				<div className={styles.container_header}>
					<h1>Розробка алгоритму глибокого навчання для розпізнавання образів</h1>

				</div>
				<div className={styles.container_subheader}>
					<div className={styles.autor}>
						<span >Автор: </span>
						<span>Іванов Іван Іванович</span>
					</div>
					<div className={styles.category}>
						<span>Категорія: </span>
						<span>Комп.зір</span>
					</div>
					<div className={styles.pubdate}>
						<span>Дата публікації: </span>
						<span>20.10.2021</span>
					</div>
				</div>
				<div className={styles.container_summary}>
					<p>
						У сучасному світі постійно щодня генеруються мільярди гігабайт відео та зображень. Використання традиційних методів роботи з такими великими обсягами інформації може бути потужно вимогливим та неефективним. Методи глибокого навчання, такі як нейронні мережі, вже досліджуються як можливий спосіб обробки цих візуальних даних, але багато з них ще не змогли досягти високої точності та швидкості, що потрібні для багатьох застосувань.
						Використовуючи комплексний датасет зображень, доктор Ткаченко розробив новий алгоритм глибокого навчання, який виявився значно точнішим у розпізнаванні образів, ніж до цього існуючі методи. Крім того, цей новий алгоритм виявився також значно швидшим, демонструючи свої здатність обробляти великі обсяги візуальних даних в реальному часі.
						Дослідження знову підкреслює важливість глибокого навчання в обробці візуальних даних і підтримує потенціал його застосування в багатьох галузях, від медицини до безпілотних автомобілів. Більше того, він закладає основу для майбутніх досліджень у цій області, прагнучи досягти ще більшої точності і швидкості.
					</p>
				</div>
				<div className={styles.container_full_text}>

					<ButtonTag appearance='primary'><Image src='/assets/down.png' width='20' height='20' alt='down' /> Завантажити весь текст</ButtonTag>
				</div>

			</div>



		</detail>
	);
}
