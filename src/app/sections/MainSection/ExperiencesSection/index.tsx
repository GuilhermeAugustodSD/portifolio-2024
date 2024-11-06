import styles from "./index.module.scss"
import { expertises } from "@/app/constants/expertises"
import { ExperienceCard } from "@/app/components/ExperienceCard"

const ExperiencesSection = () => {

    return (
        <>
            {expertises.map((expertise) => {
                return (
                    <ExperienceCard />
                )
            })}
        </>
    )
}

export { ExperiencesSection }