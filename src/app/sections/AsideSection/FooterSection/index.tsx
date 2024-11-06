import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { DictionaryType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const FooterSection = () => {
    return (
        <div className={styles.footerContainer}>
            Linkedin: {user.linkedin}
            GitHub: {user.github}
            Download CV
        </div>
    )
}

export { FooterSection }