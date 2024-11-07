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
        <div>
            {yearsExperience}+ {dictionary.yearsExperience[language as keyof DictionaryLanguagesType]}
            {projectsConcluded}+ {dictionary.concludedProjects[language as keyof DictionaryLanguagesType]}
            {happyClients}+ {dictionary.happyClients[language as keyof DictionaryLanguagesType]}
        </div>
    )
}

export { SummarySection }