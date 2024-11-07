import styles from "./index.module.scss"
import { projects } from "@/app/constants/projects"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { clients } from "@/app/constants/clients"
import { DynamicYear } from "@/app/components/DynamicYear"
import { experiences } from "@/app/constants/experiences"

const SummarySection = ({ language }: SectionPropsType) => {

    const firstExperience = experiences.sort((a, b) => {
        const aDate = new Date(a.startDate)
        const bDate = new Date(b.startDate)
        if (aDate > bDate) return 1
        if (aDate < bDate) return -1
        return 0
    })[0]
    const projectsConcluded = projects.length
    const happyClients = clients.length

    return (
        <div className={styles.summaryContainer}>
            <div>
                <span><DynamicYear date={firstExperience.startDate} />+</span>
                {dictionary.yearsExperience[language as keyof DictionaryLanguagesType]}
            </div>

            <div>
                <span>{projectsConcluded}+</span>
                {dictionary.concludedProjects[language as keyof DictionaryLanguagesType]}

            </div>

            <div>
                <span>{happyClients}+</span>
                {dictionary.happyClients[language as keyof DictionaryLanguagesType]}
            </div>
        </div>
    )
}

export { SummarySection }