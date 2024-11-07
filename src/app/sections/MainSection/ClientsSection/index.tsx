import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { clients } from "@/app/constants/clients"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { CardRecommendation } from "@/app/components/CardRecommendation"

const ClientsSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.clientContainer}>
            <h5>{dictionary.recomendations[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.cardsContainer}>

                {clients.map((client) => {
                    return (
                        <CardRecommendation
                            language={language}
                            name={client.name}
                            description={client.description[language as keyof DictionaryLanguagesType]}
                            grade={client.grade}
                            picture={client.picture}
                            company={client.company}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export { ClientsSection }