import styles from "./index.module.scss"
import { projects } from "@/app/constants/projects"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { clients } from "@/app/constants/clients"

const SummarySection = ({ language }: SectionPropsType) => {

    const yearsExperience = 4
    const projectsConcluded = projects.length
    const happyClients = clients.length

    return (
        <div className={styles.summaryContainer}>
            <div>
                <span>{yearsExperience}+</span> 
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