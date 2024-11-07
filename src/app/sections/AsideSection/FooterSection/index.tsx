import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { SectionPropsType } from "@/app/types/sections"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"

const FooterSection = ({ language }: SectionPropsType) => {
    return (
        <div className={styles.footerContainer}>
            Linkedin: {user.linkedin}
            GitHub: {user.github}
            {dictionary.download[language as keyof DictionaryLanguagesType]} CV
        </div>
    )
}

export { FooterSection }