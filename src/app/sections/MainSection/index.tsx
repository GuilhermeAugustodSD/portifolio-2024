import { HeaderSection } from "./HeaderSection"
import styles from "./index.module.scss"

import { SectionPropsType } from "@/app/types/sections"
import { SummarySection } from "./SummarySection"
import { ServicesSection } from "./ServicesSection"
import { ClientsSection } from "./ClientsSection"
import { ExperiencesSection } from "./ExperiencesSection"
import { ProjectsSection } from "./ProjectsSection"
import { ContactSection } from "./ContactSection"

const MainSection = ({ language }: SectionPropsType) => {
    return (
        <main className={`${styles.mainSectionContainer} modal-open`} id="mainContent">
            <HeaderSection language={language}/>
            <div className={styles.content}>
                <SummarySection language={language} />
                <div className={styles.gap30}>
                    <ServicesSection language={language} />
                    <ClientsSection language={language} />
                    <ExperiencesSection language={language} />
                    <ProjectsSection language={language} />
                    <ContactSection language={language} />
                </div>
            </div>
        </main>
    )
}

export { MainSection }