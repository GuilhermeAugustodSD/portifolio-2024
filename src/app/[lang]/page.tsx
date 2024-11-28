import { AsideSection } from "../sections/AsideSection";
import styles from "./page.module.scss";
import { MainSection } from "../sections/MainSection";
import { ControlsSection } from "../sections/ControlsSection";
import { languages } from "../constants/languages";
import { Metadata } from "next";
import { user } from "../constants/personalInfo";
import { DictionaryLanguagesType } from "../types/language";

const dynamicParams = false

const generateMetadata = async ({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> => {

    const language = (await params).lang

    const title = `${user.name} - ${user.ocupation[language as keyof DictionaryLanguagesType]}`

    return {
        robots: {
            index: true,
            follow: true
        },
        title: title,
        description: "",
        generator: 'Next.js',
        keywords: ['Next.js', 'React', 'JavaScript'],
        openGraph: {
            title: title,
            description: "",
            url: "",
            type: "website",
            locale: language
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: "",
        },
        alternates: {
            canonical: 'https://nextjs.org',
            languages: {
                'en': 'https://nextjs.org/en',
                'es': 'https://nextjs.org/de',
            }
        },
        category: ""
    }
}

const MainPage = async ({ params }: { params: Promise<{ lang: string }> }) => {

    const language = (await params).lang

    return (
        <div className={styles.principalContainer}>
            <AsideSection language={language} />
            <MainSection language={language} />
            <ControlsSection language={language} />
        </div>
    );
}

const generateStaticParams = async () => {
    return languages
}

export { generateStaticParams, generateMetadata, dynamicParams }
export default MainPage