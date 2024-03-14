import styles from "./btn.module.css";

function LeftBtn() {
  return (
    <button className={styles.left}>
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
          d="M15 6L9 12L15 18"
          stroke="#c5efcb"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
  );
}

export default LeftBtn;
