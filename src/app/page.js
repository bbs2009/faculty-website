import Image from "next/image";
import styles from "./page.module.css";
import Footer from './ui/components/Footer/Footer';
import Header from './ui/components/Header/Header';
import Banner from './ui/components/Banner/Banner';
import News from './ui/components/News/News';
import ButtonTag from './ui/components/ButtonTag/ButtonTag';



export default function Home() {
  const header = "Вітаємо на факультеті комп'ютерних наук та технологій"
  const description = "Факультет зосереджено на підготовці фахівців з глибоким розумінням програмування, системного аналізу і дизайну інтерфейсу. По завершенню навчання наші студенти будуть досконало володіти сучасними технологіями ІТ, мати здатність до аналітичного мислення, розуміння принципів проектування та імплементації програмного забезпечення, а також здатність адаптуватися до швидко змінюваних тенденцій у сфері ІТ."
  
  return (
   <>
    <Header />
    <Banner header ={header} description={description}/>
    <News />

    <Footer />
    
   </>
  );
}
