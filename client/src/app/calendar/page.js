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

      <h1 className={styles.title}>Calendar!</h1>
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
