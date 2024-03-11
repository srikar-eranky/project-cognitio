import styles from "./page.module.css";

function CreateCalendarDisplay() {
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

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
            {day}
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateCalendarDisplay;
