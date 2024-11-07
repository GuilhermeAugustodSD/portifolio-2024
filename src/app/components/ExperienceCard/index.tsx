import { CardExperiencesType } from "@/app/types/cards"
import styles from "./index.module.scss"
import { months } from "@/app/constants/months"
import { DictionaryLanguagesType } from "@/app/types/language"

const ExperienceCard = ({ocupation, company, startDate, endDate, description, language}: CardExperiencesType) => {

    const getDateFormated = () => {
        const splitValues = startDate.split('-')
        const mes = Number(splitValues[1])
        const ano = splitValues[0]
        const date = new Date(startDate)
        
        console.log(date);
        
        if (endDate == "*") return `${months[3].name[language as typeof DictionaryLanguagesType]}/${ano}-ATUAL`
    }

    return (
        <div className={styles.cardExperiences}>
            <div className={styles.infosPrincipais}>
                <small>{getDateFormated()}</small>
                <h6>{ocupation}</h6>
                <span>{company}</span>
            </div>
            <div className={styles.line}></div>
            <p>{description}</p>
        </div>
    )
}

export { ExperienceCard }