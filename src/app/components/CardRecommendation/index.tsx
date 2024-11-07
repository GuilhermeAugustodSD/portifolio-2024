import { dictionary } from "@/app/constants/dictionary"
import styles from "./index.module.scss"
import { DictionaryLanguagesType } from "@/app/types/language"
import { GoStarFill, GoStar } from "react-icons/go";
import { CardRecommendationPropsType } from "@/app/types/cards";
import Image from "next/image";

const CardRecommendation = ({name, description, company, language, grade, picture} : CardRecommendationPropsType) => {

    const starsFilled = new Array(grade).fill(<GoStarFill color="#F5E100"/>)
    const starsEmpty = new Array(5 - grade).fill(<GoStar color="#F5E100"/>)

    const stars = starsFilled.concat(starsEmpty)    
   
    
    return (
        <div className={styles.cardRecomedationContainer}>
            {
                picture &&
                <Image src={picture} width={40} height={40} alt={`Foto de perfil do(a) ${name}`}/>
            }
            <div className={styles.words}>
                <h6>{name}{company && ` - ${company}`}</h6>
                <blockquote>{description}</blockquote>
            </div>

            {
                grade &&
                <div>
                    {
                        stars.map((star) => (
                            <>{star}</>
                        ) )
                    }
                </div>
            }
        </div>
    )
}

export { CardRecommendation }