import { CodeAutomatic } from "@/app/components/CodeAutomatic"
import styles from "./index.module.scss"
import Image from "next/image"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType, LanguageType } from "@/app/types/language"

const HeaderSection = ({ language }: LanguageType) => {

    return (
        <div className={styles.headerContainer}>
            <Image src="/header-4.jpg" alt="" width={1168} height={342} />
            <div className={styles.textAbsolute}>
                <h1>{dictionary.welcome[language as keyof DictionaryLanguagesType]}</h1>
                <CodeAutomatic language={language}/>
                <p>{dictionary.resume[language as keyof DictionaryLanguagesType]}</p>
            </div>
            <div className={styles.imageAbsolute}>
                <Image src="/avatar-gui.png" alt="" width={320} height={320}/>
            </div>
        </div>
    )
}

export { HeaderSection }