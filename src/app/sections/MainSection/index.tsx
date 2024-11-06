import { HeaderSection } from "./HeaderSection"
import styles from "./index.module.scss"

import { SectionPropsType } from "@/app/types/sections"

const MainSection = ({ language }: SectionPropsType) => {
    return (
        <section>
            <HeaderSection />
        </section>
    )
}

export { MainSection }