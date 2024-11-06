import { LinearProgressBar } from "@/app/components/LinearProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"

const SoftSkillsSection = () => {
    return (
        <>
            {skills.filter((skill) => skill.section == "soft").map((skill) => {
                return (
                    <div key={`softSkill-${skill.name}`}>
                        {skill.name}
                    </div>
                )
            })}
        </>
    )
}

export { SoftSkillsSection }