"use client";
import styles from "./page.module.css";
import Emoji from "../components/Emoji/emoji";
import { useState } from "react";
import { faces } from "../components/Emoji/emoji";
import NextBtn from "../components/NextBtn/btn";
import Navbar from "../components/Navbar/navbar";

function RatingGreeting() {
  const [activeRating, setActiveRating] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleEmojiClick = (rating) => {
    setActiveRating(rating === activeRating ? null : rating);
    setShowButton(true);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <>
        <style js="true" global="true">
          {`
        body {
            background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
            margin-bottom: 20px;
        }
          `}
        </style>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>How are you feeling today?</h1>
        </div>

        <div className={styles.ratingContainer}>
          <div className={`${styles.emojiRow} ${styles.topRow}`}>
            {faces.slice(0, 5).map((face, index) => (
              <div className={styles.emojiContainer} key={index}>
                <Emoji
                  rating={index + 1}
                  isActive={index + 1 === activeRating}
                  onClick={handleEmojiClick}
                />
                <span>{index + 1}</span>
              </div>
            ))}
            {showButton && <NextBtn />}
          </div>
          <div className={`${styles.emojiRow} ${styles.bottomRow}`}>
            {faces.slice(5).map((face, index) => (
              <div className={styles.emojiContainer} key={index + 5}>
                <Emoji
                  rating={index + 6}
                  isActive={index + 6 === activeRating}
                  onClick={handleEmojiClick}
                />
                <span>{index + 6}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default RatingGreeting;
