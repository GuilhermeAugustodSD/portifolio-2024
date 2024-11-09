"use client"

import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { clients } from "@/app/constants/clients"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { CardRecommendation } from "@/app/components/CardRecommendation"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const ClientsSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.clientContainer}>
            <h5>{dictionary.recomendations[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.galeryContainer}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    keyboard={{
                        enabled: true,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Keyboard, Pagination, Navigation]}
                    className={styles.cardsContainer}
                >
                    {clients.map((client, idx) => {
                        return (
                            <SwiperSlide key={`client-${client.name}`}>
                                <CardRecommendation
                                    language={language}
                                    name={client.name}
                                    description={client.description[language as keyof DictionaryLanguagesType]}
                                    grade={client.grade}
                                    picture={client.picture}
                                    company={client.company}
                                    key={`client-${idx}`}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export { ClientsSection }