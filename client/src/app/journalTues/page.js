import Link from 'next/link'
import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";
import Navbar from "../components/Navbar/navbar";

const tuesdayJournal = () => {
    return (  
        <>
      <style js="true" global="true">
        {`
      body {
          background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
       }
        `}
      </style>
      <Navbar />
      <h1 className={styles.title}>Journal</h1>
      <div className={styles.bookContainer}>
        <LeftBtn />
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
        This week, I learned the importance of taking breaks and stepping away from work or studying periodically. I tend to get caught up in tasks and keep pushing myself without breaks, thinking it will make me more productive. However, I noticed that taking short breaks actually helps me stay focused and refreshed. It's like giving my brain a chance to reset and come back with renewed energy.
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            April 9, 2024
          </h3>
          <h2 className={styles.prompt}>Write about a lesson you learned this week.
          </h2>
        </div>
        <Link href="../../journalWed">
          <RightBtn/>
        </Link>
      </div>
    </>
    );
}
 
export default tuesdayJournal;