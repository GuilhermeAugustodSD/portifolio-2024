import Image from "next/image";
import styles from "./index.module.scss"
import { user } from "@/app/constants/personalInfo";
import { SectionPropsType } from "@/app/types/sections";
import { DictionaryLanguagesType } from "@/app/types/language";

const IntroSection = ({language}: SectionPropsType) => {
    
    return (
        <div className={styles.introContainer}>
            <Image src="/user_icon.png" alt="" width={140} height={140}/>
            <div className={styles.description}>
                <h1>{user.name}</h1>
                <h2>{user.ocupation[language as keyof DictionaryLanguagesType]}</h2>
            </div>
        </div>
    )
}

export { IntroSection }