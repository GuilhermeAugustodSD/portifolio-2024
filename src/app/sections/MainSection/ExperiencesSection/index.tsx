import styles from "./index.module.scss"
import { expertises } from "@/app/constants/expertises"
import { ExperienceCard } from "@/app/components/ExperienceCard"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const ExperiencesSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.experiencesContainer}>
            <h5>{dictionary.experiences[language as keyof DictionaryLanguagesType]}</h5>
            
            {expertises.map((expertise) => {
                return (
                    <ExperienceCard />
                )
            })}
        </section>
    )
}

export { ExperiencesSection }