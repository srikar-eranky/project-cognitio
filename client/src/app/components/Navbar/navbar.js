import React, { useState } from "react"
import styles from './navbar.module.css'
import Link from "next/link";

function Navbar(){

    return (

        <div className={styles.link}>
            <Link href="/">Journal</Link>
            <Link href="/">Emoji Page</Link>
            <Link href="/">Calendar</Link>
        </div>
            
    );
}

export default Navbar;