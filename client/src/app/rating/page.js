import styles from "./page.module.css";
import Emoji from "../components/Emoji/emoji";

function RatingGreeting() {
  return (
    <>
      <style js global>
        {`
      body {
          background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
       }
        `}
      </style>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>How are you feeling today?</h1>
      </div>

      <div className={styles.ratingContainer}>
        <div className={styles.emojiRow}>
          <div className={styles.emojiContainer}>
            <Emoji rating={1} />
            <span>1</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={2} />
            <span>2</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={3} />
            <span>3</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={4} />
            <span>4</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={5} />
            <span>5</span>
          </div>
        </div>

        <div className={styles.emojiRow}>
          <div className={styles.emojiContainer}>
            <Emoji rating={6} />
            <span>6</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={7} />
            <span>7</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={8} />
            <span>8</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={9} />
            <span>9</span>
          </div>
          <div className={styles.emojiContainer}>
            <Emoji rating={10} />
            <span>10</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RatingGreeting;
