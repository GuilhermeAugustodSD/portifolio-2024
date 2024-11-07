import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { SectionPropsType } from "@/app/types/sections"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { FaLinkedin, FaGithubSquare  } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const FooterSection = ({ language }: SectionPropsType) => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.iconsContainer}>
                <a href={user.linkedin} title="LinkedIn" target="_blank">
                    <FaLinkedin size={30}/>
                </a>

                <a href={user.github} title="GitHub" rel="" target="_blank">
                    <FaGithubSquare size={30}/>
                </a>
            </div>
            <div className={styles.downloadContaier}>
                <span>{dictionary.download[language as keyof DictionaryLanguagesType]} CV</span>
                <IoMdDownload size={20}/>
            </div>
        </div>
    )
}

export { FooterSection }