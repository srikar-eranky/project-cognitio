import styles from "./page.module.css";

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
    const prevMonth = month - 1;
    const daysOfPrevMonth = Array.from(
      { length: daysInGivenMonth(year, prevMonth) },
      (_, i) => i + 1
    );
    const daysToExtract = startWeekDay;
    return daysOfPrevMonth
      .slice(-daysToExtract)
      .map((day) => ({ day, isntMonth: true }));
  }

  //calculate days after month ends
  function findDaysAfterStart() {
    const nextMonth = month + 1;
    const daysOfNextMonth = Array.from(
      { length: daysInGivenMonth(year, nextMonth) },
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
            {day}
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateCalendarDisplay;
