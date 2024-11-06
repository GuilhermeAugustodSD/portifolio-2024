import { CircularProgressBar } from "@/app/components/CircularProgressBar"
import styles from "./index.module.scss"
import { skills } from "@/app/constants/skills"

const MainSkillsSection = () => {
    return (
        <div>
            {skills.filter((skill) => skill.section == "main").map((skill) => {
                return (
                    <CircularProgressBar name={skill.name} percent={skill.percent} key={`mainSkill-${skill.name}`} />
                )
            })}
        </div>
    )
}

export { MainSkillsSection }