"use client";
import Image from 'next/image';
import styles from './page.module.css'
import Navbar from './components/Navbar/navbar'
import CalendarGreeting from './calendar/page'
import JournalGreeting from './journal/page'
import Emoji from './components/Emoji/emoji'
import LogInBtn from './components/LogInBtn/btn'
import menu from './hamburger-menu-icon.svg';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log(isOpen);
  }

  const closeSideBar = () => {
    setOpen(false);
    console.log(isOpen);
  }
  return (
    <div>
      <Image src={menu} width={24} height={24} alt='menu' onClick={handleClick} className={styles.image} />
      <div className={styles.navbar}>
          <div onClick={closeSideBar} className={styles.cancel}>X</div>
        <Navbar />
      </div>

      <div className={styles.titleContainer}>
        <p className={styles.intro}>WELCOME TO THE</p>
        <h1 className={styles.title}>
          Project <span>Cognitio</span>
        </h1>
      </div>
    </div>
  );
}
