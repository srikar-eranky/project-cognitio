"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import menu from "../../../../public/hamburger-menu-icon.svg";
import LogInBtn from "../LogInBtn/btn";
import LogOut from "../LogOutBtn/btn";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setCurrentDate();
  }, [])

  const setCurrentDate = () => {
    const now = new Date();
    setDate(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`);
  }

  return (
    <div className={styles.navContainer}>
      <div
        className={styles.nav}
        style={{
          transform: isOpen
            ? "translate(0%,0%) scale(1)"
            : "translate(-10%,-10%) scale(0)",
        }}
      >
        {/*cancel button div*/}
        <div className={styles.cancelDiv}>
          <span
            onClick={() => {
              setOpen(false);
              console.log(isOpen);
            }}
          >
            <span className={styles.cancel}>X</span>
          </span>
        </div>

        <div className={styles.link}>
          <Link href="/">Home</Link>
          <Link href={"/journal"}>Journal</Link>
          <Link href="/rating">Emoji Page</Link>
          <Link href="/calendar">Calendar</Link>
          <LogOut />
        </div>
      </div>

      {/*hamburger button*/}
      <div className={styles.image}>
        <Image
          src={menu}
          width={24}
          height={24}
          alt="menu"
          onClick={() => {
            setOpen(true);
            console.log(isOpen);
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
