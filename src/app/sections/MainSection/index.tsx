import { HeaderSection } from "./HeaderSection"
import styles from "./index.module.scss"

import { SectionPropsType } from "@/app/types/sections"
import { SummarySection } from "./SummarySection"
import { ServicesSection } from "./ServicesSection"

const MainSection = ({ language }: SectionPropsType) => {
    return (
        <main className={styles.mainSectionContainer}>
            <HeaderSection />
            <SummarySection language={language} />
            <ServicesSection language={language} />
        </main>
    )
}

export { MainSection }