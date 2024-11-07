import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const SoftSkillsSection = ({ language }: SectionPropsType) => {
    return (
        <>
            {skills.filter((skill) => skill.section == "soft").map((skill) => {
                return (
                    <div key={`softSkill-${skill.name[language as keyof DictionaryLanguagesType]}`}>
                        {skill.name[language as keyof DictionaryLanguagesType]}
                    </div>
                )
            })}
        </>
    )
}

export { SoftSkillsSection }