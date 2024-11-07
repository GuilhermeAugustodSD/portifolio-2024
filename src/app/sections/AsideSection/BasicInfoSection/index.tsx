import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryLanguagesType } from "@/app/types/language"
import { dictionary } from "@/app/constants/dictionary"
import { DynamicYear } from "@/app/components/DynamicYear"

const BasicInfoSection = ({ language }: SectionPropsType) => {

    return (
        <div className={styles.basicInfoContainer}>
            <h3>{dictionary.residence[language as keyof DictionaryLanguagesType]}: <span>{user.country[language as keyof DictionaryLanguagesType]}</span></h3>
            <h3>{dictionary.city[language as keyof DictionaryLanguagesType]}: <span>{user.city}</span></h3>
            <h3>{dictionary.age[language as keyof DictionaryLanguagesType]}: <span><DynamicYear date={user.birthday} /></span></h3>
        </div>
    )
}

export { BasicInfoSection }