'use client'
import styles from "./index.module.scss"

import { BasicInfoSection } from "./BasicInfoSection"
import { IntroSection } from "./IntroSection"
import { MainSkillsSection } from "./MainSkillsSection"
import { SecondarySkillsSection } from "./SecondarySkillsSection"
import { SoftSkillsSection } from "./SoftSkillsSection"
import { SectionPropsType } from "@/app/types/sections"
import { FooterSection } from "./FooterSection"
import Image from "next/image"
import { useState } from "react"

const AsideSection = ({ language }: SectionPropsType) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <aside className={`${styles.asideContainer} ${isOpen ? styles.asideOpen : ""}`}>
                <IntroSection language={language} />
                <div className={styles.skillsContainer}>
                    <BasicInfoSection language={language} />
                    <MainSkillsSection language={language} />
                    <SecondarySkillsSection language={language} />
                    <SoftSkillsSection language={language} />
                </div>
                <FooterSection language={language} />
            </aside>
            <div className={styles.avatarAbsolute} onClick={() => setIsOpen((prev) => !prev)}>
                <Image  src="/user_icon.png" alt="" width={40} height={40} />
            </div>
        </>
        
    )
}

export { AsideSection }