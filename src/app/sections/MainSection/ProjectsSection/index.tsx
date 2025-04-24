"use client"

import styles from "./index.module.scss"
import { dictionary } from "@/app/constants/dictionary"
import { DictionaryLanguagesType } from "@/app/types/language"
import { SectionPropsType } from "@/app/types/sections"
import { CardProject } from "@/app/components/CardProject"
import { projects } from "@/app/constants/projects"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const ProjectsSection = ({ language }: SectionPropsType) => {

    return (
        <section className={styles.servicesContainer}>
            <h5>{dictionary.projects[language as keyof DictionaryLanguagesType]}</h5>

            <div className={styles.galeryContainer}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    keyboard={{
                        enabled: true,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Keyboard, Pagination, Navigation]}
                    className={styles.cardsContainer}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {projects.map((project,idx) => {
                    return (
                        <SwiperSlide key={`project-${idx}`}>
                            <CardProject
                                language={language}
                                srcImage={project.srcImage}
                                urlProject={project.urlProject}
                                name={project.name}
                                description={project.description[language as keyof DictionaryLanguagesType]}
                                key={`project-${idx}`}
                            />
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>

            {/* <div className={styles.containerCards}>
                {projects.map((project,idx) => {
                    return (
                        <CardProject
                            language={language}
                            srcImage={project.srcImage}
                            urlProject={project.urlProject}
                            name={project.name[language as keyof DictionaryLanguagesType]}
                            description={project.description[language as keyof DictionaryLanguagesType]}
                            key={`project-${idx}`}
                        />
                    )
                })}
            </div> */}

        </section>
    )
}

export { ProjectsSection }