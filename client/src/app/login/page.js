"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName
        })
      })
      const data = await response.json()
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
      console.log(JSON.parse(localStorage.getItem("user")));
    } catch (err) {
      console.error(err.message)
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
        <label htmlFor="username">First Name:</label>
        <input
          type="text"
          className={styles.inputField}
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="username">Last Name:</label>
        <input
          type="text"
          className={styles.inputField}
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <br />

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
          type="text"
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
