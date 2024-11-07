import styles from "./index.module.scss"

import { BasicInfoSection } from "./BasicInfoSection"
import { IntroSection } from "./IntroSection"
import { MainSkillsSection } from "./MainSkillsSection"
import { SecondarySkillsSection } from "./SecondarySkillsSection"
import { SoftSkillsSection } from "./SoftSkillsSection"
import { SectionPropsType } from "@/app/types/sections"
import { FooterSection } from "./FooterSection"

const AsideSection = ({ language }: SectionPropsType) => {
    return (
        <aside className={styles.asideContainer}>
            <IntroSection language={language} />
            <div className={styles.skillsContainer}>
                <BasicInfoSection language={language} />
                <MainSkillsSection language={language} />
                <SecondarySkillsSection language={language} />
                <SoftSkillsSection language={language} />
            </div>
            <FooterSection language={language} />
        </aside>
    )
}

export { AsideSection }