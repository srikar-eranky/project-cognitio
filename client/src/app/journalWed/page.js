import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";
import Navbar from "../components/Navbar/navbar";
import Link from 'next/link'

const journalGreeting = () => {
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
        <Link href="../../journalTues"> 
        <LeftBtn/> 
        </Link>
        
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
        I appreciate the opportunity to learn and grow every day, the support of my loved ones, and the ability to connect with interesting people like you. 
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            April 10, 2024
          </h3>
          <h2 className={styles.prompt}> What are three things you appreciate about your life right now?
          </h2>
        </div>
        <Link href="../../journalThree">
          <RightBtn />
        </Link>
      </div>
    </>
    );
}
 
export default journalGreeting;