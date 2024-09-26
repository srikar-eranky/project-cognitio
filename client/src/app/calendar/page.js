"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CreateCalendarDisplay() {
  const router = useRouter();
  const [ratings, setRatings] = useState([]);
  const [days, setDays] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const year = new Date().getFullYear();

    //month
    let month = new Date().getMonth(); //from 0 - 11 (jan - dec)

    //what day does month start on
    const startWeekDay = new Date(year, month, 1).getDay();

    //days in month
    const daysInGivenMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const formatDate = (year, month, day) => {
      const formattedMonth = (month + 1).toString().padStart(2, '0'); // Add leading zero for month
      const formattedDay = day.toString().padStart(2, '0'); // Add leading zero for day
      return `${year}-${formattedMonth}-${formattedDay}`;
    };

    const daysOfCurrMonth = Array.from(
      { length: daysInGivenMonth(year, month) },
      (_, i) => formatDate(year, month, i+1)
    );

    setDays([
      ...daysOfCurrMonth.map((day) => ({
        day,
        key: `curr-${Number(day.split('-')[2])}`,
      }))
    ]);
  }, []);

  useEffect(() => {
    if(days.length > 0){
      getRatings();
    }
  }, [days]);

  const getRatings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/moods/getMoods/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: user._id,
          dates: days.map(({ day }) => day)
        })
      })
      if(!response.ok) {
        throw new Error("Network Error: " + response.statusText);
      }
      const data = await response.json()
      const ratingsObj = data.ratings.reduce((acc, rating) => {
        acc[rating.date] = rating.rating; // Assuming `rating.date` and `rating.mood`
        return acc;
      }, {});
      setRatings(ratingsObj);
    } catch(err){
      console.error(err.message);
    }
  }

  const getJournal = (event, date) => {
    event.preventDefault();
    router.push(`/journal/?date=${date}`);
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
      {/* <div style={{ marginBottom: "20px", width: "fit-content" }}>
        <Navbar />
      </div> */}
      <Navbar />
      <h1 className={styles.title}>Calendar</h1>
      <div className={styles.weekDaysContainer}>
        <div className={styles.weekDays}>
          <p className={`${styles.weekDay} ${styles.sunday}`}>Sun</p>
          <p className={`${styles.weekDay} ${styles.monday}`}>Mon</p>
          <p className={`${styles.weekDay} ${styles.tuesday}`}>Tue</p>
          <p className={`${styles.weekDay} ${styles.wednesday}`}>Wed</p>
          <p className={`${styles.weekDay} ${styles.thursday}`}>Thu</p>
          <p className={`${styles.weekDay} ${styles.friday}`}>Fri</p>
          <p className={`${styles.weekDay} ${styles.saturday}`}>Sat</p>
        </div>
      </div>

      <div className={styles.container}>
        {days.map(({ day, isntMonth, key }) => {
          const mood = ratings[day] || "No mood";
          console.log("Day: ", day);
          console.log("Rating: ", ratings[day]);
          return (
            <div
              key={key}
              className={`${styles.day} ${isntMonth ? styles.notMonth : ""}`}
              onClick={(event) => getJournal(event, day)}
            >
              {day}
              <button>Mood: {mood}</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default CreateCalendarDisplay;
