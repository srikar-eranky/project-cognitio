"use client";
import Image from 'next/image';
import styles from './page.module.css'
import Navbar from './components/Navbar/navbar'
import CalendarGreeting from './calendar/page'
import JournalGreeting from './journal/page'
import Emoji from './components/Emoji/emoji'
import LogInBtn from './components/LogInBtn/btn'
import menu from '../../public/hamburger-menu-icon.svg';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <main className={styles.main}>

      {/* navbar overarching div*/}
      <div className={styles.nav} style={{transform: isOpen ? "translate(0%,0%) scale(1)" : 
      "translate(-10%,-10%) scale(0)"}}/*{width: isOpen ? "350px" : "0px"}*/>

        {/*cancel button div*/}
        <div className={styles.cancelDiv}>
          <span onClick={() => {setOpen(false); console.log(isOpen)}}>
            <span className={styles.cancel}>X</span></span>
        </div>
        <Navbar />

      </div>

      {/*hamburger button and log in button*/}
      <div className={styles.topRow}>

        <div className={styles.image}>
          <Image src={menu} width={24} height={24} alt='menu' onClick={() => 
            {setOpen(true); console.log(isOpen)}} />
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
