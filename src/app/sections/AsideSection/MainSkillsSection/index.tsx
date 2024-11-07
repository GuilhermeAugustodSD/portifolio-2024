import { CircularProgressBar } from "@/app/components/CircularProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryLanguagesType } from "@/app/types/language"

const MainSkillsSection = ({ language }: SectionPropsType) => {
    return (
        <div className={styles.mainSkillsContainer}>
            {skills.filter((skill) => skill.section == "main").map((skill) => {
                return (
                    <CircularProgressBar name={skill.name[language as keyof DictionaryLanguagesType]} percent={skill.percent} key={`mainSkill-${skill.name[language as keyof DictionaryLanguagesType]}`} />
                )
            })}
        </div>
    )
}

export { MainSkillsSection }