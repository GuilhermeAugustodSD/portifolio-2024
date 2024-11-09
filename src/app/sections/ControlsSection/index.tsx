import { SectionPropsType } from "@/app/types/sections"
import styles from "./index.module.scss"
import { Switch } from "@/app/components/Switch"
import { LanguageButton } from "@/app/components/LanguageButton"

const ControlsSection = ({ language }: SectionPropsType) => {


  return (
    <div className={styles.controlsContainer}>

      <div className={styles.toogle}>
        <Switch />
      </div>

      <div className={styles.languagesContainer}>
        <LanguageButton label="es" language={language} />
        <LanguageButton label="en" language={language} />
        <LanguageButton label="pt" language={language} />
      </div>
    </div>
  )
}

export { ControlsSection }