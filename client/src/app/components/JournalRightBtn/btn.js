import styles from "./btn.module.css";

function RightBtn() {
  return (
    <button className={styles.right}>
      <svg
        width="75px"
        height="75px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#e5fcf5"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="#c5efcb"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default RightBtn;
