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
  const [content, setContent] = useState("");
  const [journal, setJournal] = useState(null);
  const [date, setDate] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Fetch a new random prompt when the component mounts
    setCurrentDate();
    generateRandomPrompt();
    if(date) {
        getEntry();
    }
  }, [date]);

  const setCurrentDate = () => {
    const currDate = new Date();
    updateDate(new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDay()));
  }

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * promptsData.prompts.length);
    setPrompt(promptsData.prompts[randomIndex]);
  };

  const updateDate = (newDate) => {
    const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
    setDate(formattedDate);
  };

  const prevDayChange = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);
    updateDate(currentDate);
  };

  const nextDayChange = () => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);
    updateDate(currentDate);
  };

  const getEntry = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/journals/${user._id}/${date}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(!response.ok) {
            throw new Error("network error" + response.statusText);
        }
        const data = await response.json()
        if(data === null) {
            setJournal(null);
        } else {
            setJournal(data);
            setContent(data.content);
        }
    } catch (error) {
        console.error(error.message);
    }
  }

  const submitEntry = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/journals/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt,
                content: content,
                userId: user._id
            })
        })

        if(!response.ok) {
            throw new Error("Network error " + response.statusText)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error.message)
    }
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
        <LeftBtn onClick={prevDayChange} />
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
          <textarea
            className={styles.textbox}
            placeholder="Spill your guts here"
            autoFocus
            rows="15"
            cols="35"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
          <style>
            {`::placeholder{
                    color: var(--darkGreen);
                }
                :focus{
                  outline: none;
                }`}
          </style>
          <button onClick={submitEntry} className={styles.submit}>Log Entry</button>
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            {date}
          </h3>
          <h2 className={styles.prompt}>{prompt}</h2>
        </div>
        <RightBtn onClick={nextDayChange} />
      </div>
    </>
  );
}

export default JournalGreeting;
