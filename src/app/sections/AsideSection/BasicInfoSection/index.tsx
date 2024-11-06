"use client"
import { user } from "@/app/constants/personalInfo"
import styles from "./index.module.scss"

const BasicInfoSection = () => {

    return (
        <div>
            <h3>Local: <span>{user.country.EN}</span></h3>
            <h3>Cidade: <span>{user.city}</span></h3>
            <h3>Idade: <span>{user.age}</span></h3>
        </div>
    )
}

export { BasicInfoSection }