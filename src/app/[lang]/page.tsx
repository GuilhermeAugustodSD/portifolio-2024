import { AsideSection } from "../sections/AsideSection";
import styles from "./page.module.scss";
import { MainSection } from "../sections/MainSection";
import { ControlsSection } from "../sections/ControlsSection";

const dynamicParams = false

const MainPage = async ({ params }: {
    params: Promise<{ lang: string }>
}) => {

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
    return [{ lang: 'en' }, { lang: 'pt' }, { lang: 'es' }]
}

export { generateStaticParams, dynamicParams }
export default MainPage