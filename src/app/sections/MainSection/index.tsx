import { HeaderSection } from "./HeaderSection"
import styles from "./index.module.scss"

import { SectionPropsType } from "@/app/types/sections"
import { SummarySection } from "./SummarySection"
import { ServicesSection } from "./ServicesSection"
import { ExperiencesSection } from "./ExperiencesSection"
import { ClientsSection } from "./ClientsSection"

const MainSection = ({ language }: SectionPropsType) => {
    return (
        <main className={styles.mainSectionContainer}>
            <HeaderSection />
            <div className={styles.content}>
                <SummarySection language={language} />
                <div className={styles.gap30}>
                    <ServicesSection language={language} />
                    <ClientsSection language={language} />
                    <ExperiencesSection language={language} />
                </div>
            </div>
        </main>
    )
}

export { MainSection }