import { LinearProgressBar } from "@/app/components/LinearProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryType } from "@/app/types/language"

const SecondarySkillsSection = ({language}: SectionPropsType) => {
    return (
        <>
            {skills.filter((skill) => skill.section == "secondary").map((skill) => {
                return (
                    <LinearProgressBar name={skill.name[language as keyof DictionaryType]} percent={skill.percent} key={`secondarySkill-${skill.name[language as keyof DictionaryType]}`}/>
                )
            })}
        </>
    )
}

export { SecondarySkillsSection }