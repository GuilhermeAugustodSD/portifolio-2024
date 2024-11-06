import Image from "next/image";
import styles from "./index.module.scss"
import { user } from "@/app/constants/personalInfo";
import { SectionPropsType } from "@/app/types/sections";
import { DictionaryType } from "@/app/types/language";

const IntroSection = ({language}: SectionPropsType) => {
    
    return (
        <div>
            <Image src="/user_icon.png" alt="" width={140} height={140}/>
            <h1>{user.name}</h1>
            <h2>{user.ocupation[language as keyof DictionaryType]}</h2>
        </div>
    )
}

export { IntroSection }