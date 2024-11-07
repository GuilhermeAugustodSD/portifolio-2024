import { LinearProgressBar } from "@/app/components/LinearProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryLanguagesType } from "@/app/types/language"

const SecondarySkillsSection = ({ language }: SectionPropsType) => {
    return (
        <div className={styles.secondarySkillsContainer}>
            {skills.filter((skill) => skill.section == "secondary").map((skill) => {
                return (
                    <LinearProgressBar name={skill.name[language as keyof DictionaryLanguagesType]} percent={skill.percent} key={`secondarySkill-${skill.name[language as keyof DictionaryLanguagesType]}`} />
                )
            })}
        </div>
    )
}

export { SecondarySkillsSection }