import { dictionary } from "@/app/constants/dictionary"
import styles from "./index.module.scss"
import { DictionaryLanguagesType } from "@/app/types/language"
import { CardPropsType } from "@/app/types/cards";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({name, description, language,} : CardPropsType) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.words}>
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
            <a href="">
                {dictionary.contractThisService[language as keyof DictionaryLanguagesType]}
                <FaArrowRightLong size={20} />
            </a>
        </div>
    )
}

export { Card }