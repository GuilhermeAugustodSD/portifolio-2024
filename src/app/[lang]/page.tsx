import { AsideSection } from "../sections/AsideSection";
import styles from "./page.module.scss";
import { MainSection } from "../sections/MainSection";

const dynamicParams = false

const MainPage = async ({ params }: {
    params: Promise<{ lang: string }>
}) => {

    const language = (await params).lang

    return (
        <div className={styles.teste}>
            <AsideSection language={language} />
            <MainSection language={language} />
        </div>
    );
}

const generateStaticParams = async () => {
    return [{ lang: 'en' }, { lang: 'pt' }, { lang: 'es' }]
}

export { generateStaticParams, dynamicParams }
export default MainPage