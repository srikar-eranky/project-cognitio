import styles from "./btn.module.css";

function NextBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles.next}>
      {/* <img className={styles.svg} src="/rightArrow.svg"></img> */}
      <svg
        width="64px"
        height="64px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="#E5FCF5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default NextBtn;
