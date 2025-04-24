'use client'
import { dictionary } from "@/app/constants/dictionary"
import styles from "./index.module.scss"
import { DictionaryLanguagesType } from "@/app/types/language"
import { CardProjectPropsType } from "@/app/types/cards";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ModalProjects } from "../ModalProjects";

const CardProject = ({name, description, language, srcImage, urlProject} : CardProjectPropsType) => {

    // const [isModalActive, setIsModalActive] = useState<boolean>(false)

    // useEffect(() => {
    //     if (isModalActive) 
    //         document.body.classList.add('modalOpen')
    //     else 
    //         document.body.classList.remove('modalOpen')
    // }, [isModalActive])

    return (
        <>
            <div className={styles.cardContainer}>
                <Image src={srcImage} alt="" width={340} height={220}  />
                {/* <div className={styles.iconOpenModal} onClick={() => setIsModalActive(true)}>
                    <FaEye size={20} color="var(--color-destaque)"/>
                </div> */}
                <div className={styles.words}>
                    <h6>{name}</h6>
                    <p>{description}</p>
                </div>
                <a href={urlProject} target="_blank">
                    {dictionary.viewProject[language as keyof DictionaryLanguagesType]}
                    <FaArrowRightLong size={20} />
                </a>
            </div>

            {/* {
                isModalActive &&
                <ModalProjects 
                    name={name}
                    description={description}
                    language={language}
                    srcImage={srcImage}
                    urlProject={urlProject}
                    closeModal={setIsModalActive}
                />
            } */}
        </>
    )
}

export { CardProject }