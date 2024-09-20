"use client";

import { useRouter } from "next/navigation";

const LogOut = () => {
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("user", "null");
        router.push("/");
    }
    return (
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default LogOut;