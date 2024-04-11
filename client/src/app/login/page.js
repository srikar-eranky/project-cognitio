"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className={styles.inputField}
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
