import styles from "./index.module.scss"
import { ExperienceCard } from "@/app/components/ExperienceCard"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { experiences } from "@/app/constants/experiences"

const ExperiencesSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.experiencesContainer}>
            <h5>{dictionary.experiences[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.cardsContainer}>
                {experiences.map((experience) => {
                    return (
                        <ExperienceCard
                            language={language}
                            ocupation={experience.ocupation[language as keyof DictionaryLanguagesType]}
                            company={experience.company}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            description={experience.description[language as keyof DictionaryLanguagesType]}
                        />
                    )
                })}
            </div>

        </section>
    )
}

export { ExperiencesSection }