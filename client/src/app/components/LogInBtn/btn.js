import styles from "./btn.module.css";
import Link from "next/link";

function LogInBtn() {
  return (
    <Link href="/login" className={styles.loginlink}>
      <button className={styles.logIn}>Log In</button>
    </Link>
  );
}

export default LogInBtn;
