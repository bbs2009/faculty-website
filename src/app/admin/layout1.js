import { Inter } from "next/font/google";
import "../globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Адмін панель",
  description: "Свторено для відображення інформації про факультет комп'ютерних наук",
};

export default function RootLayoutAdmin({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
