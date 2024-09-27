"use client";

import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";
import Navbar from "../components/Navbar/navbar";
import promptsData from "./prompts.json";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function JournalGreeting() {
  const router = useRouter();
  const param = useSearchParams();
  const date = param.get("date");
  console.log(date);
  const [prompt, setPrompt] = useState("");
  const [content, setContent] = useState("");
  const [journal, setJournal] = useState(null);
  const [user, setUser] = useState(null);
  const todayDate = new Date();
  const today = `${todayDate.getFullYear()}-${String(todayDate.getMonth() + 1).padStart(2, '0')}-${String(todayDate.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("Stored User: ", storedUser);
    if(storedUser) {
      console.log("Entered if statement");
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Fetch a new random prompt when the component mounts
    console.log("User: ", user);
    if(date && user){
      console.log("This is being re-rendered");
      getEntry();
    } else {
      console.log("no date");
    }
  }, [user, date]);

  const generateRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * promptsData.prompts.length);
    setPrompt(promptsData.prompts[randomIndex]);
  };

  const updateDate = (newDate) => {
    const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
    return formattedDate;
  };

  const prevDayChange = () => {
    const [year, month, day] = date.split('-').map(Number);
    const currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);
    const finalDate = updateDate(currentDate);
    router.push(`/journal?date=${finalDate}`);
  };

  const nextDayChange = () => {
    const [year, month, day] = date.split('-').map(Number);
    const currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);
    const finalDate = updateDate(currentDate);
    router.push(`/journal?date=${finalDate}`);
  };

  const getEntry = async () => {
    try {
        const response = await fetch(`https://project-cognitio.onrender.com/api/journals/${user._id}/${date}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!response.ok) {
          if(response.status === 404){
            setJournal(null);
            generateRandomPrompt();
            setContent("");
          }
          throw new Error("network error" + response.statusText);
        } else {
          const data = await response.json();
          console.log(data.journal);
          setJournal(data);
          setContent(data.journal.content);
          setPrompt(data.journal.prompt);
        }
    } catch (error) {
        console.error(error.message);
    }
  }

  const submitEntry = async () => {
    try {
        const response = await fetch('https://project-cognitio.onrender.com/api/journals/', {
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
        console.log(data);
        router.push('/rating');
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
            value={content || ""}
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
          {journal === null && (
            <button onClick={submitEntry} className={styles.submit}>Log Entry</button>
          )}
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            {date}
          </h3>
          <h2 className={styles.prompt}>{prompt}</h2>
        </div>
        {date !== today && (
          <RightBtn onClick={nextDayChange} />
        )}
      </div>
    </>
  );
}

export default JournalGreeting;
