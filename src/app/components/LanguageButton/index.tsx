import { ButtonPropsType } from "@/app/types/button"
import styles from "./index.module.scss"

const LanguageButton = ({ label, language }: ButtonPropsType) => {
    return (
        <a className={language === label ? `${styles.button} ${styles.active}` : `${styles.button} ${styles.desactive}`} href={`/${label}`}>{label}</a>
    )
}

export { LanguageButton }