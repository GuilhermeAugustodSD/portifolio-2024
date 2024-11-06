import styles from "./index.module.scss"
import { expertises } from "@/app/constants/expertises"
import { ExperienceCard } from "@/app/components/ExperienceCard"

const SummarySection = () => {

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

export { SummarySection }