import { LinearProgressBar } from "@/app/components/LinearProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"

const SecondarySkillsSection = () => {
    return (
        <>
            {skills.filter((skill) => skill.section == "secondary").map((skill) => {
                return (
                    <LinearProgressBar name={skill.name} percent={skill.percent} key={`secondarySkill-${skill.name}`}/>
                )
            })}
        </>
    )
}

export { SecondarySkillsSection }