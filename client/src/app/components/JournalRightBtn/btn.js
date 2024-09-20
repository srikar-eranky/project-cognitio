import styles from "./btn.module.css";

function RightBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles.right}>
      <svg
        width="75px"
        height="75px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#e5fcf5"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="#c5efcb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default RightBtn;
