import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";

function JournalGreeting() {
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
      <div className={styles.background_container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Journal</h1>
        </div>

        <div className={styles.book}>
          <div className={styles.arrows_left}>
            {/* <span class="material-symbols-outlined">
                    arrow_back_ios
                </span> */}
            <LeftBtn />
          </div>
          <div className={styles.left_container}>
            <h1 className={styles.date}>
              {month} {date}, {year}
            </h1>
            <h3 className={styles.prompt}>Fill with prompt</h3>
          </div>
          <div className={styles.right_container}>
            <textarea
              className={styles.textbox}
              placeholder="Spill your guts"
              rows="100"
              cols="500"
            ></textarea>
          </div>
          <div className={styles.arrows_right}>
            {/* <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span> */}
            <RightBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default JournalGreeting;
