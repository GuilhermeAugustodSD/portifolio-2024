import styles from "./index.module.scss"

import { BasicInfoSection } from "./BasicInfoSection"
import { IntroSection } from "./IntroSection"
import { MainSkillsSection } from "./MainSkillsSection"
import { SecondarySkillsSection } from "./SecondarySkillsSection"
import { SoftSkillsSection } from "./SoftSkillsSection"

const AsideSection = () => {
    return (
        <>
            <IntroSection />
            <BasicInfoSection />
            <MainSkillsSection />
            <SecondarySkillsSection />
            <SoftSkillsSection />
        </>
    )
}

export { AsideSection }