import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { DictionaryType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const SoftSkillsSection = ({language}: SectionPropsType) => {
    return (
        <>
            {skills.filter((skill) => skill.section == "soft").map((skill) => {
                return (
                    <div key={`softSkill-${skill.name[language as keyof DictionaryType]}`}>
                        {skill.name[language as keyof DictionaryType]}
                    </div>
                )
            })}
        </>
    )
}

export { SoftSkillsSection }