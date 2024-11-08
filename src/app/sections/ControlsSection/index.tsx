import { SectionPropsType } from "@/app/types/sections"
import styles from "./index.module.scss"
import { Switch } from "@/app/components/Switch"

const ControlsSection = ({ language }: SectionPropsType) => {
 
  
  return (
      <div className={styles.controlsContainer}>

        <div className={styles.toogle}>
          <Switch />
        </div>

        <div className={styles.languagesContainer}>
          <a className={language == "es" ? styles.active : `${styles.desactive}`} href="/es">es</a>
          <a className={language == "en" ? styles.active : `${styles.desactive}`} href="/en">en</a>
          <a className={language == "pt" ? styles.active : `${styles.desactive}`} href="/pt">pt</a>
        </div>
      </div>
  )
}

export { ControlsSection }