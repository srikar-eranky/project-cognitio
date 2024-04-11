"use client";
import { useEffect, useState } from "react";
import LogInBtn from "./components/LogInBtn/btn";
import Navbar from "./components/Navbar/navbar";
import styles from "./page.module.css";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.topRow}>
        {!isLoggedIn ? <LogInBtn /> : <Navbar />}
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
