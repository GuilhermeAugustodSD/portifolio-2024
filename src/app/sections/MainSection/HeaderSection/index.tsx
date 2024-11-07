import styles from "./index.module.scss"
import Image from "next/image"

const HeaderSection = () => {

    return (
        <div>
            <Image src="/background.jpeg" alt="" width={1168} height={342} />
        </div>
    )
}

export { HeaderSection }