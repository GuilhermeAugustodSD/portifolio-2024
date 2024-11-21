import styles from "./index.module.scss"
import { GoStarFill, GoStar } from "react-icons/go";
import { CardRecommendationPropsType } from "@/app/types/cards";
import Image from "next/image";
import { Fragment } from "react";

const CardRecommendation = ({ name, description, company, language, grade, picture }: CardRecommendationPropsType) => {

    const gradeCalculated = grade ?? 0
    const starsFilled = new Array(grade).fill(<GoStarFill color="var(--color-destaque)" />)
    const starsEmpty = new Array(5 - gradeCalculated).fill(<GoStar color="var(--color-destaque)" />)

    const stars = starsFilled.concat(starsEmpty)

    return (
        <div className={styles.cardRecomedationContainer}>
            {
                picture &&
                <Image src={picture} width={40} height={40} alt={`Foto de perfil do(a) ${name}`} />
            }
            <div className={styles.words}>
                <h6>{name}{company && ` - ${company}`}</h6>
                <blockquote>{description}</blockquote>
            </div>

            {
                grade &&
                <div>
                    {
                        stars.map((star,idx) => (
                            <Fragment key={`start-${idx}`}>{star}</Fragment>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export { CardRecommendation }