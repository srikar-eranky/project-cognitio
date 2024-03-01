import styles from "./page.module.css";
import LogInBtn from "./components/LogInBtn/btn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <LogInBtn />
      </div>

      <div className={styles.titleContainer}>
        <p className={styles.intro}>WELCOME TO THE</p>
        <h1 className={styles.title}>
          Project <span>Cognitio</span>
        </h1>
      </div>
    </main>
  );
}
