import Navbar from "../components/Navbar/navbar";
import styles from "./page.module.css";
import Link from "next/link";

function CreateCalendarDisplay() {
  //year
  const year = new Date().getFullYear();

  //month
  let month = new Date().getMonth(); //from 0 - 11 (jan - dec)

  //what day does month start on
  const startWeekDay = new Date(year, month, 1).getDay();

  //days in month
  const daysInGivenMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Calculate days of the month
  const daysOfCurrMonth = Array.from(
    { length: daysInGivenMonth(year, month) },
    (_, i) => i + 1
  );

  //calculate days before month starts
  function findDaysBeforeStart() {
    let prevMonth = month - 1;
    const daysOfPrevMonth = Array.from(
      {
        length: daysInGivenMonth(
          prevMonth === -1 ? year - 1 : year,
          prevMonth === -1 ? (prevMonth = 11) : prevMonth
        ),
      },
      (_, i) => i + 1
    );
    const daysToExtract = startWeekDay;
    return daysOfPrevMonth
      .slice(-daysToExtract)
      .map((day) => ({ day, isntMonth: true }));
  }

  //calculate days after month ends
  function findDaysAfterStart() {
    let nextMonth = month + 1;
    const daysOfNextMonth = Array.from(
      {
        length: daysInGivenMonth(
          nextMonth === 12 ? year + 1 : year,
          nextMonth === 12 ? (nextMonth = 0) : nextMonth
        ),
      },
      (_, i) => i + 1
    );
    const daysToExtract =
      42 - (daysOfCurrMonth.length + daysBeforeStart.length);
    return daysOfNextMonth
      .slice(0, daysToExtract)
      .map((day) => ({ day, isntMonth: true }));
  }

  const daysBeforeStart = findDaysBeforeStart();
  const daysAfterStart = findDaysAfterStart();

  const days = [
    ...daysBeforeStart.map(({ day }) => ({
      day,
      isntMonth: true,
      key: `prev-${day}`,
    })),
    ...daysOfCurrMonth.map((day) => ({
      day,
      isntMonth: false,
      key: `curr-${day}`,
    })),
    ...daysAfterStart.map(({ day }) => ({
      day,
      isntMonth: true,
      key: `next-${day}`,
    })),
  ];

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
        {days.map(({ day, isntMonth, key }) => (
          <div
            key={key}
            className={`${styles.day} ${isntMonth ? styles.notMonth : ""}`}
          >
            {day === 11 ? (
              <Link href="/journalThree" style={{textDecoration: "none", color: "var(--darkGreen)"}}>{day}</Link>
            ) : day === 10 ? (
              <Link href="/journalWed" style={{textDecoration: "none", color: "var(--darkBlue)"}}>{day}</Link>
            ) : day === 9 ? (
              <Link href="/journalTues" style={{textDecoration: "none", color: "var(--darkRed)"}}>{day}</Link>
            ) : (
              day
            )}
            
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateCalendarDisplay;
