import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryType } from "@/app/types/language"

const BasicInfoSection = ({ language }: SectionPropsType) => {

    return (
        <div>
            <h3>Local: <span>{user.country[language as keyof DictionaryType]}</span></h3>
            <h3>Cidade: <span>{user.city}</span></h3>
            <h3>Idade: <span>{user.age}</span></h3>
        </div>
    )
}

export { BasicInfoSection }