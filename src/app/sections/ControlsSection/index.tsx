import { SectionPropsType } from "@/app/types/sections"
import styles from "./index.module.scss"
import { Switch } from "@/app/components/Switch"

const ControlsSection = ({ language }: SectionPropsType) => {
  console.log("***", language);
  
  return (
      <div className={styles.controlsContainer}>

        <div className={styles.toogle}>
          <Switch />
        </div>

        <div className={styles.languagesContainer}>
          <button className={language == "es" ? styles.active : `${styles.desactive}`} value="es">es</button>
          <button className={language == "en" ? styles.active : `${styles.desactive}`}value="en">en</button>
          <button className={language == "pt" ? styles.active : `${styles.desactive}`} value="pt">pt</button>
        </div>
      </div>
  )
}

export { ControlsSection }