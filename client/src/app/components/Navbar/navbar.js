import React, { useState } from "react"
import styles from './navbar.module.css'
import Link from "next/link";

function Navbar(){

    return (
        <div className={styles.link}>
            <Link href="/journal">Journal</Link>
            <Link href="/rating">Emoji Page</Link>
            <Link href="/calendar">Calendar</Link>
        </div>
    );
}

export default Navbar;