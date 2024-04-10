import styles from "./page.module.css";
//test
function Login() {
  return (
    <>
      <style js="true" global="true">
        {`
        body {
            background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
            margin-bottom: 20px;
        }
          `}
      </style>
      <form className={styles.form}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className={styles.inputField}
          id="username"
          name="username"
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className={styles.inputField}
          id="password"
          name="password"
          required
        />
        <br />
        <br />

        <input className={styles.login} type="submit" value="Login" />
      </form>
    </>
  );
}

export default Login;
