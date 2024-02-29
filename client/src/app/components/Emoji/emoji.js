import styles from "./emoji.module.css";
import Image from "next/image";
import rating1 from ".//ratingFaces/rating1.svg";
import rating2 from ".//ratingFaces/rating2.svg";
import rating3 from ".//ratingFaces/rating3.svg";
import rating4 from ".//ratingFaces/rating4.svg";
import rating5 from ".//ratingFaces/rating5.svg";
import rating6 from ".//ratingFaces/rating6.svg";
import rating7 from ".//ratingFaces/rating7.svg";
import rating8 from ".//ratingFaces/rating8.svg";
import rating9 from ".//ratingFaces/rating9.svg";
import rating10 from ".//ratingFaces/rating10.svg";

const faces = [
  {
    face: styles.face1,
    hover: styles.hover1,
  },
  {
    face: styles.face2,
    hover: styles.hover2,
  },
  {
    face: styles.face3,
    hover: styles.hover3,
  },
  {
    face: styles.face4,
    hover: styles.hover4,
  },
  {
    face: styles.face5,
    hover: styles.hover5,
  },
  {
    face: styles.face6,
    hover: styles.hover6,
  },
  {
    face: styles.face7,
    hover: styles.hover7,
  },
  {
    face: styles.face8,
    hover: styles.hover8,
  },
  {
    face: styles.face9,
    hover: styles.hover9,
  },
  {
    face: styles.face10,
    hover: styles.hover10,
  },
];

function Emoji({ rating }) {
  const getRatingSrc = () => {
    switch (rating) {
      case 1:
        return rating1;
      case 2:
        return rating2;
      case 3:
        return rating3;
      case 4:
        return rating4;
      case 5:
        return rating5;
      case 6:
        return rating6;
      case 7:
        return rating7;
      case 8:
        return rating8;
      case 9:
        return rating9;
      case 10:
        return rating10;
    }
  };

  const { face, hover } = faces[rating - 1];

  return (
    <div className={`${styles.circle} ${hover}`}>
      <Image src={getRatingSrc()} alt="Rating face" className={face} />
    </div>
  );
}

export default Emoji;
