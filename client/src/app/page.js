import styles from './page.module.css'
import Navbar from './components/Navbar/navbar'
import CalendarGreeting from './calendar/page'
import JournalGreeting from './journal/page'
import Emoji from './components/Emoji/emoji'
import LogInBtn from './components/LogInBtn/btn'

export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.topRow}>
        <div>
          <Navbar />
        </div>
        
        <div>
          <LogInBtn />
        </div>
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
