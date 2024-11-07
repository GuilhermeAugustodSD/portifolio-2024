import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { FaCheck } from "react-icons/fa";

const SoftSkillsSection = ({ language }: SectionPropsType) => {
    return (
        <div className={styles.softSkillsContainer}>
            {skills.filter((skill) => skill.section == "soft").map((skill) => {
                return (
                    <div className={styles.softSkill} key={`softSkill-${skill.name[language as keyof DictionaryLanguagesType]}`}>
                        <FaCheck size={14} color="#F5E100"/>
                        {skill.name[language as keyof DictionaryLanguagesType]}
                    </div>
                )
            })}
        </div>
    )
}

export { SoftSkillsSection }