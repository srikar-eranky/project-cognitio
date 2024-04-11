"use client";

import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";
import Navbar from "../components/Navbar/navbar";
import promptsData from "./prompts.json";
import Link from 'next/link'
import { useState, useEffect } from "react";

function JournalGreeting() {
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    // Fetch a new random prompt when the component mounts
    generateRandomPrompt();
  }, []);

  useEffect(() => {
    // Update the prompt when the date changes (i.e., once per day)
    generateRandomPrompt();
  }, [new Date().getDate()]); // This effect will run whenever the date changes

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * promptsData.prompts.length);
    setPrompt(promptsData.prompts[randomIndex]);
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
  }

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
        <Link href="../../journalWed">
            <LeftBtn />
          </Link>
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
          <textarea
            className={styles.textbox}
            placeholder="Spill your guts here"
            autoFocus
            rows="15"
            cols="35"
          ></textarea>
          <style>
            {`::placeholder{
                    color: var(--darkGreen);
                }
                :focus{
                  outline: none;
                }`}
          </style>
          <button className={styles.submit}>Log Entry</button>
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            {month} {date} , {year}
          </h3>
          <h2 className={styles.prompt}>{prompt}</h2>
        </div>
        <RightBtn />
      </div>
    </>
  );
}

export default JournalGreeting;
