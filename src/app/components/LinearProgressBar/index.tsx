import { ProgressBarProps } from "@/app/types/progress"
import styles from "./index.module.scss"

const LinearProgressBar = ({ name, percent }: ProgressBarProps) => {
    return (
        <div className={styles.linearProgressContainer}>
            <div className={styles.progress_bar_label}>
                <span>{name}</span>
                <span className={styles.percent}>{percent}%</span>
            </div>
            <div className={styles.progress_bar}>
                <div className={styles.progress_bar_filler} style={{width: `${percent}%`}}></div>
            </div>
        </div>
    )
}

export { LinearProgressBar }