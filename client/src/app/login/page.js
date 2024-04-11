"use client";

import { useState } from "react";
import styles from "./page.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a request to your backend API to authenticate the user
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Authentication successful
        // You may want to redirect the user to another page or perform some action
        console.log("Authentication successful");
      } else {
        // Authentication failed
        // You may want to display an error message to the user
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error occurred while authenticating:", error);
    }
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
