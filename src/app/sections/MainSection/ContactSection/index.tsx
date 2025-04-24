import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"

const ContactSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.contactContainer}>
            <h5>{dictionary.contractThisService[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.containerInputs}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                </div>
                <div className={styles.containerTextArea}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
            </div>
        </section>
    )
}

export { ContactSection }