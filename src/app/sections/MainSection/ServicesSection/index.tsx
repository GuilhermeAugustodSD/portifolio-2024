import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const ServicesSection = ({ language }: SectionPropsType) => {

    return (
        <>
            {dictionary.myServices[language as keyof DictionaryLanguagesType]}
        </>
    )
}

export { ServicesSection }