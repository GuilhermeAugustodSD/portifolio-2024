import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"
import { SectionPropsType } from "@/app/types/sections"
import { DictionaryType } from "@/app/types/language"
import Image from "next/image"

const HeaderSection = () => {

    return (
        <div>
            <Image src="/background.jpeg" alt="" width={500} height={300} />
        </div>
    )
}

export { HeaderSection }