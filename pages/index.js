import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* This will redirect to the home page */}
      <Link className={styles.link} href='/home'>
        <p id={styles.startbtn}>
          Démarrer
        </p>
      </Link>
    </div>
  )
}
