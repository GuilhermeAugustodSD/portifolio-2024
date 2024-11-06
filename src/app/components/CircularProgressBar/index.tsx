import { ProgressBarProps } from "@/app/types/progress"
import styles from "./index.module.scss"

const CircularProgressBar = ({ name, percent }: ProgressBarProps) => {
    return (
        <>
            <div className={styles.progress_bar} style={{ background: `conic-gradient(#F5E100,#F5E100 ${percent}%, rgba(0,0,0,0) 0%)` }}>
                <div className={styles.progress_bar_filler}>
                    <span>{percent}%</span>
                </div>
            </div>
            {name}
        </>
    )
}

export { CircularProgressBar }