import { Card } from "@/app/components/Card"
import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { expertises } from "@/app/constants/expertises"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const ServicesSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.servicesContainer}>
            <h5>{dictionary.myServices[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.containerCards}>
                {expertises.map((expertise,idx) => {
                    return (
                        <Card
                            language={language}
                            name={expertise.name[language as keyof DictionaryLanguagesType]}
                            description={expertise.description[language as keyof DictionaryLanguagesType]}
                            key={`expertise-${idx}`}
                        />
                    )
                })}
            </div>

        </section>
    )
}

export { ServicesSection }