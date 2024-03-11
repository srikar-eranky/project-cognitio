import styles from "./page.module.css";

function CreateCalendarDisplay() {
  //year
  const year = new Date().getFullYear();

  //month
  const month = new Date().getMonth();

  //what day does month start on
  const startWeekDay = new Date(year, month, 1).getDay();

  //days in month
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  //calculate days before month starts
  const daysBeforeStart = Array.from(
    { length: startWeekDay },
    (_, i) => `placeholder-${i}`
  );

  // Calculate days of the month
  const daysOfMonth = Array.from(
    { length: daysInMonth(year, month) },
    (_, i) => i + 1
  );

  //calculate days after month ends
  const daysAfterStart = Array.from(
    { length: 42 - (daysOfMonth.length + daysBeforeStart.length) },
    (_, i) => `placeholder-${i}`
  );

  const days = [...daysBeforeStart, ...daysOfMonth, ...daysAfterStart];

  return (
    <>
      <style js="true" global="true">
        {`
      body {
          background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
       }
        `}
      </style>

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
        {days.map((day) => (
          <div key={day} className={styles.day}>
            {typeof day === "number" ? day : ""}
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateCalendarDisplay;
