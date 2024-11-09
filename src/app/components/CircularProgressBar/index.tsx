"use client"
import { ProgressBarProps } from "@/app/types/progress"
import styles from "./index.module.scss"
import { CSSProperties, useEffect, useState } from "react"

const CircularProgressBar = ({ name, percent }: ProgressBarProps) => {

    const [circularPercent, setCircularPercent] = useState(0)
 
    useEffect(()=>{
        setCircularPercent(percent)
    },[])

    return (
        <div className={styles.circularProgressContainer}>
            <div className={styles.progress_bar} style={{"--progress": `${circularPercent}%`} as CSSProperties}>
                <div className={styles.progress_bar_filler}>
                    <span>{percent}%</span>
                </div>
            </div>
            {name}
        </div>
    )
}

export { CircularProgressBar }