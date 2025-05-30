"use client"
import { useEffect, useState } from "react"
import styles from "./index.module.scss"

const Switch = () => {

    const [isActive, setIsActive] = useState(false)

    const onChangeSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked ? "light" : "dark"
        document.body.setAttribute("data-theme", value)
        localStorage.setItem("p2024-dm", value)
        setIsActive(e.target.checked)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsActive(localStorage.getItem("p2024-dm") === "light")
        } else {
            setIsActive(document.body.getAttribute("data-theme") === "light")
        }
    }, [])

    return (
        <div className={styles.switchContainer}>
            <input className={styles.switchInput} type="checkbox" onChange={onChangeSwitch} checked={isActive} />
            <div className={styles.switchButton}>
                <div className={styles.switchButtonInside}>
                    <svg className={`${styles.switchIcon} off`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" />
                    </svg>
                    <svg className={`${styles.switchIcon} on`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="12" height="2" rx="1" />
                    </svg>
                </div>
            </div >
        </div >
    )
}

export { Switch }