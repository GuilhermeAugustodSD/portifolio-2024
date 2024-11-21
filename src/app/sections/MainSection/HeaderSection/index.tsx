import styles from "./index.module.scss"
import Image from "next/image"

const HeaderSection = () => {

    return (
        <div className={styles.headerContainer}>
            <Image src="/header-4.jpg" alt="" width={1168} height={342} />
        </div>
    )
}

export { HeaderSection }